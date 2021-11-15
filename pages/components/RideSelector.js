import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../../data/carList'

const RideSelector = ({ pickUp, dropOff }) => {
    const [rideDuration, setRideDuration] = useState(0)

    // get ride duration from an API
    // MB SDK needs a pick up destination 
    // and a drop off destination
    useEffect(() => {
       rideDuration = fetch(
           `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUp[0]},${pickUp[1]};${dropOff[0]},${dropOff[1]}?access_token=pk.eyJ1IjoibWFidWVsbWFhbGkiLCJhIjoiY2t2bG9wdzEyMDMyOTJ1bW9qMjJ6aXBueCJ9.8-ZfQTHA4K7Pm2F3GhxMRw`
        )
        .then(res => res.json())
         .then(data => {
            setRideDuration(data.routes[0].duration / 100) 
        })
    }, [pickUp, dropOff])
    return (
        <Wrapper>
            <Title>Chose a Ride, Pay with Crypto! </Title>
             {/* 🔥 FAbio */}
             {/* 🚀 Sam */}
            <CarList>
                {carList.map((car, index) => (

                <Car key={index}>
                    <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>10 min away</Time>
                    </CarDetails>
                    
                    <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>
                )) }

            </CarList>
        </Wrapper>
    )
}

export default RideSelector


const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
text-gray-700 text-center text-xs font-bold py-2 border-b border-gray-200
`

const CarList = tw.div`
overflow-y-scroll
`

const Car = tw.div`
flex p-4 items-center 
`

const CarImage = tw.img`
h-14 mr-4
`

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-bold
`
const Time = tw.div`
text-xs text-blue-500 font-bold
`
const Price = tw.div`
text-sm font-bold
`