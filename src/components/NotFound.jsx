import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { useNavigate, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const {error, status} = useRouteError()
    const navigate = useNavigate()
    
    const handleGoBack = () => {
        navigate('/')
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <FaceFrownIcon className='h-12 w-12 text-amber-400'/>
            <p className='my-5 text-3xl font-bold text-amber-400'>Page Not Found</p>
            <p className='text-xl my-5'>Error: {error.message}</p>
            <p className='text-xl'>Status Code: {status}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default NotFound;