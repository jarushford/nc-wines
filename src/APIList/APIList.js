import React from 'react'
import Endpoint from '../Endpoint/Endpoint'

export default function APIList() {
  return (
    <section className="api-list">
      <h2>Available Endpoints</h2>
      <Endpoint method="GET" title="/api/v1/vineyards" />
      <Endpoint method="GET" title="/api/v1/vineyards/:id" />
      <Endpoint method="POST" title="/api/v1/vineyards/" />
      <Endpoint method="PUT" title="/api/v1/vineyards/:id" />
      <Endpoint method="DELETE" title="/api/v1/vineyards/:id" />
      <Endpoint method="GET" title="/api/v1/wines" />
      <Endpoint method="GET" title="/api/v1/wines/:id" />
      <Endpoint method="POST" title="/api/v1/wines" />
      <Endpoint method="PUT" title="/api/v1/wines/:vineyard_id" />
      <Endpoint method="DELETE" title="/api/v1/wines/:id" />
    </section>
  )
}