import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate ,Outlet} from 'react-router-dom'

const ProtectedRoute = () => {
    const {curruser} = useSelector(state => state.user)
  return (
    <>
    {
        curruser ? (<Outlet/>) : (<Navigate to='/sign-in'></Navigate>)
    }
    </>
    
  )
}

export default ProtectedRoute