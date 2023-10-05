'use client'
import Image from 'next/image'
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";


export default function Home() {

    let handleClick = () => {
        const analytics = getAnalytics();
        let a = logEvent(analytics, 'goal_completion', { name: 'lever_puzzle'});
    }

  return (
    <main className="p-4">
        <h1>HomePage</h1>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => { handleClick(); }}
        >
            Button
    
        </button>

    </main>
  )
}
