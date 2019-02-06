import React from 'react'
import Endpoint from '../Endpoint/Endpoint'

export default function APIList() {
  return (
    <section className="api-list">
      <h2>Available Endpoints</h2>
      <Endpoint
        method="GET"
        title="/api/v1/vineyards"
        description="Returns an array of all vineyards. This endpoint can also be modified with 'name' and 'region' query parameters to search more specifically."
        returned="Array"
        required="N/A"
      />
      <Endpoint
        method="GET" 
        title="/api/v1/vineyards/:id" 
        description="Returns a single vineyard."
        returned="Object"
        required="N/A" 
      />
      <Endpoint
        method="POST" 
        title="/api/v1/vineyards/" 
        description="Creates a new vineyard."
        returned="Object with ID of new vineyard"
        required="{
          name: <String>,
          address: <String>,
          website: <String>,
          phone: <String>,
          region: <String>
        }" 
      />
      <Endpoint
        method="PUT" 
        title="/api/v1/vineyards/:id" 
        description="Edits an exisiting vineyard." 
        returned="Object with ID of updated vineyard"
        required="Object with the parameters you wish to update"
      />
      <Endpoint
        method="DELETE" 
        title="/api/v1/vineyards/:id" 
        description="Deletes an existing vineyard." 
        returned="Object with ID of deleted vineyard"
        required="N/A"
      />
      <Endpoint
        method="GET" 
        title="/api/v1/wines" 
        description="Returns an array of all wines." 
        returned="Array"
        required="N/A"
      />
      <Endpoint
        method="GET" 
        title="/api/v1/wines/:id" 
        description="Returns a single wine."
        returned="Object"
        required="N/A"
      />
      <Endpoint
        method="POST" 
        title="/api/v1/wines" 
        description="Creates a new wine."
        returned="Object with ID of new wine"
        required="{
          name: <String>,
          type: <String>,
          color: <String>,
          vineyard_id: <Number>
        }"
      />
      <Endpoint
        method="PUT" 
        title="/api/v1/wines/:id" 
        description="Edits an existing wine."
        returned="Object with ID of updated wine"
        required="Object with the parameters you wish to update"
      />
      <Endpoint
        method="DELETE" 
        title="/api/v1/wines/:id" 
        description="Deletes an existing wine."
        returned="Object with ID of deleted wine"
        required="N/A"
      />
    </section>
  )
}