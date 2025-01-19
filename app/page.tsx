import Link from "next/link"

import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId, redirectToSignIn } = await auth()
  let href = userId ? '/dashboard' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">
          The best app for reaching your goals
        </h1>
        <p className="text-2xl text-white/60 mb-4">
          The best app for tracking your progress and guide you towards your goals.  
        </p>
        <div>
          <Link href={ href } >
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
