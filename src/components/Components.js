import React from 'react'
import AddMovie from './AddMovie'
import RealtimeMovies from './RealtimeMovies'
import EditMovie from './EditMovie'

export default function Components() {
  return (
    <div>
        <RealtimeMovies/>
        <br/>
        <AddMovie/>
        <br/>
        <EditMovie/>
    </div>
  )
}
