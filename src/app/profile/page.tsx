'use client'
import react, {useEffect, useState} from 'react';
import { UserAuth } from '../context/AuthContext.js';
import Spinner from '../components/Spinner';

const profile = () => {
    const {user} = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setLoading(false);
        };

        checkAuthentication();
    } ,[user]);

    return (
        <div className='p-4'>
            <h1>Profile page</h1>
            {loading ? (
                <Spinner/>
            ) : user ? (
                <p>Welcome, {user.displayName} - you are logged in </p>
            ) : (
                <p>You must be logged in to view this page - protected route.</p>
            )}
            
        </div>
    );
}

export default profile;