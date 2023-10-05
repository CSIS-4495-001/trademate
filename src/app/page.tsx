'use client'
import Image from 'next/image'
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from './context/AuthContext';


export default function Home() {
    const { user } = UserAuth();
    const router = useRouter();

  return (
    <main className="p-4">
        <h1>HomePage</h1>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => { }}
        >
            Button
        </button>
    </main>
  )
}
