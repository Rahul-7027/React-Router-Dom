import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'
import "./error.css"

const Error = () => {
    const error = useRouteError()
    const navigate= useNavigate()
    const handleGoBack=()=>{
        // navigate(-1)
        navigate("/")
    }
    console.log(111,navigate)
    return (
        <div>
            <div id='oopss'>
                <div id='error-text'>
                    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
                    <span>404 PAGE</span>
                    <p className="p-a">
                        . The page you were looking for could not be found</p>
                    <p className="p-b">
                        ... Back to previous page
                    </p>
                    <button className='className="p-b"' onClick={handleGoBack} type="button">Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default Error
