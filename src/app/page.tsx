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
    </main>
  )
}
