import React from 'react'

export default function Endpoint({ method, title, description, returned, required }) {
  return (
    <article className="endpoint">
      <h1>{method}  {title}</h1>
      <div className="endpt-info">
        <p>{description}</p>
        <h4>Returned Value: {returned}</h4>
        <h4>Required body for request: {required}</h4>
      </div>
    </article>
  )
}