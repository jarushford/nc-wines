import React from 'react'
import '../main.scss'

export default function Header() {
  return (
    <header className="header">
      <h1>North Carolina Wines</h1>
      <button
        onClick={() => window.scrollTo({ top: 720, behavior: 'smooth' })}
      >
        Test Endpoints
      </button>
      <button
        onClick={() => window.scrollTo({ top: 2100, behavior: 'smooth' })}
      >
        Available Endpoints
      </button>
    </header>
  )
}