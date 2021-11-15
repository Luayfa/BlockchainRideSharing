import React from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useEffect } from 'react/cjs/react.development'
function Login() {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
  
    return (
        <Wrapper>
            <Logo src='https://i.ibb.co/ZMhy8ws/uber-logo.png'/>
            <Title>
                Log In here!
                </Title>
                <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
            <SigninButton onClick={() => signInWithPopup(auth, provider)}>
                Sign In With Google
            </SigninButton>
        </Wrapper>
    )
}

export default Login


const Wrapper = tw.div`
flex flex-col h-screen bg-gray-400  p-4
`

const SigninButton = tw.button`
bg-blue-500 hover:bg-blue-700 mt-8 text-white text-center w-full font-bold py-4
self-center rounded-full
`


const Logo = tw.img`
h-20 w-auto object-contain self-start 
`
const Title = tw.div`
text-5xl pt-4 text-gray-800
`

const HeadImage = tw.img`
object-contain w-full 
`
