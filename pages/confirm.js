import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

function Confirm() {
    const router = useRouter()
    // route input address 
    const { pick, drop } = router.query


    const [pickUp, setPickUp ] = useState([0, 0])
    const [dropOff, setDropOff ] = useState([0, 0])


    const getPickUpCoordz = (pick) => {
        
        // fetch Function to get geo coordinates of inpuit location 
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pick}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibWFidWVsbWFhbGkiLCJhIjoiY2t2bG9wdzEyMDMyOTJ1bW9qMjJ6aXBueCJ9.8-ZfQTHA4K7Pm2F3GhxMRw", 
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickUp(data.features[0].center)
        })
        // ?access_token Query Parameter start w ?
    }
    const getDropOffCoordz = (drop) => {
       
        // fetch Function to get geo coordinates of inpuit location 
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${drop}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibWFidWVsbWFhbGkiLCJhIjoiY2t2bG9wdzEyMDMyOTJ1bW9qMjJ6aXBueCJ9.8-ZfQTHA4K7Pm2F3GhxMRw", 
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
          
            setDropOff(data.features[0].center)
        })
        
    }

    useEffect(() => {
        getPickUpCoordz(pick);
        getDropOffCoordz(drop);
    }, [pick, drop])
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/search' >
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                   </Link>
            </ButtonContainer>
            <Map 
                pickUp={pickUp}
                dropOff={dropOff}
            />
            <RideContainer>
                <RideSelector
                 pickUp={pickUp}
                 dropOff={dropOff}
                />
           
                    <ConfirmButtonContainer>
                        <ConfirmButton>
                        Confirm Crypto Ride
                        </ConfirmButton>
                    </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm


const Wrapper = tw.div`
flex h-screen flex-col bg-gold
` 

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`


const ConfirmButtonContainer = tw.div`
border-t-2 
`

const ConfirmButton = tw.button`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img` h-full object-contain `