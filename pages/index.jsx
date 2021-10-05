import React from 'react'
import Link from 'next/link'

const Home = () => (
  <h1 className="flex justify-center items-center">
    <button type="button">
      <Link href="/login">Login</Link>
    </button>
  </h1>
)

export default Home
