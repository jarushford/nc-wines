import React from 'react'
import '../main.scss'

export default function Header() {
  return (
    <header className="header">
      <h1>North Carolina Wines</h1>
      <button
        onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
      >
        Test Endpoints
      </button>
      <button
        onClick={() => window.scrollTo({ top: 1900, behavior: 'smooth' })}
      >
        Available Endpoints
      </button>
    </header>
  )
}