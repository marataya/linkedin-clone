import React, {useState} from 'react'
import './Login.css'
import {auth} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        if(!name) {
            return alert('Please enter full name')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
        }).catch(error => alert(error))
    }

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        })
        .catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)}  placeholder='Full name (required if registering)' type="text" name="" id="" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" name="" id="" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" name="" id="" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="passowrd" name="" id="" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{'\u00A0'}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
