import React from 'react'

export default function Endpoint({ method, title }) {
  return (
    <article className="endpoint">
      <h1>{method}  {title}</h1>
      <div className="endpt-info">
        
      </div>
    </article>
  )
}