import Link from 'next/link';
import react, {useEffect, useState} from 'react';
import { UserAuth } from '../context/AuthContext.js';
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = react.useState(true);

    const handleSignIn = async () => { 
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setLoading(false);
        };

        checkAuthentication();
    } ,[user]);
    
    return (
        <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
            <ul className='flex'>
                <li className='p-2 cursor-pointer'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-2 cursor-pointer'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='p-2 cursor-pointer'>
                    <Link href='/profile'>Profile</Link>
                </li>
            </ul>

            {loading ? null : !user ? (
                <ul className="flex">
                    <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                        Login
                    </li>
                </ul>
            ) : (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <p onClick={handleSignOut}>Sign Out</p>
                </div>
            )}

            
        </div>
    );
}

export default Navbar;