import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import{app}  from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSucess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleCLick = async ()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result =await signInWithPopup(auth,provider);
            console.log(result);

            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signInSucess(data))
            navigate('/')
            
        } catch (error) {
            console.log("Failed to login with google",error);
            
        }
    }
      
  return (
    <button onClick={handleGoogleCLick} type='button' className='bg-red-700 text-white uppercase p-3 rounded-lg hover:opacity-95'>continue with google</button>
  )
}

export default OAuth