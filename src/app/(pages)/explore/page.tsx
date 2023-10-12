'use client';
 
import MapComponent from '../../components/MapComponent';

import react, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { UserAuth } from "../../context/AuthContext.js";

const page = () => {
    const { user } = UserAuth();
    const router = useRouter();

    useEffect(() => {
        if(!user) {
            router.push('/');
        }
    });

    return (

<div className="flex flex-1 items-center justify-center p-6">
    <div className="w-full max-w-lg">
        <MapComponent></MapComponent>
              <div className='p-4'>
            <h1>Explore page</h1>
        </div>
    </div>
</div>

    );
}

export default page;