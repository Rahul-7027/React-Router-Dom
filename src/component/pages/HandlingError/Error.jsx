import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import "./error.css"

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <div id='oopss'>
                <div id='error-text'>
                    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
                    <span>404 PAGE</span>
                    <p class="p-a">
                        . The page you were looking for could not be found</p>
                    <p class="p-b">
                        ... Back to previous page
                    </p>
                    <button className='class="p-b"' type="button"><NavLink to="/">Back to Home</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default Error
