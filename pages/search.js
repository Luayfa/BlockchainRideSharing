import { useState } from 'react'
import tw from 'tailwind-styled-components';
import Link from 'next/link'

function Search() {

    const [pick, setPick] = useState("")
    const [drop, setDrop] = useState("")
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <InputContainer>
            <FromTo>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <Sqr src="https://img.icons8.com/windows/50/000000/square-full.png" />
            </FromTo>
                <InputBoxes>
                
                <Input placeholder='Enter Pick Up Location'
                       value={pick}
                       onChange={(e) => setPick(e.target.value)}
                       />
                <Input placeholder='Where You Goin? '
                       value={drop} 
                       onChange={(e) => setDrop(e.target.value)}
                       />
                </InputBoxes>
                <Plus src="https://img.icons8.com/ios/50/000000/plus-math.png" />

            </InputContainer>


            <Saved>
                <Star src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Locations
            </Saved>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pick: pick,
                    drop: drop
                }
                }}>
            <ConfirmButtonContainer>
                <ConfirmButton></ConfirmButton>

                Confirm Locations
            </ConfirmButtonContainer>
            </Link>


        </Wrapper>
            
    )
}

export default Search

const ConfirmButtonContainer = tw.div`
bg-black text-white text-center my-2 mx-4 px-4 py-3 text-2xl rounded-lg cursor-pointer
    `
const ConfirmButton = tw.button`
`

const Wrapper = tw.div`
bg-gray-200 h-screen bg-silver-400
    `
const ButtonContainer = tw.div`
bg-white h-10 px-4  
`
const BackButton = tw.img`
h-12 cursor-pointer
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const FromTo = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
h-2.5 
`
const Line = tw.img`
h-10
`
const Sqr = tw.img`
h-3
`
const Plus = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const Saved = tw.div`
flex items-center bg-white px-4 py-2 
`

const Star = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2 
`