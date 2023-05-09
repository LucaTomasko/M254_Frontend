import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
    <Link to="/tournaments">
      <Button variant='contained'>Tournaments</Button>
    </Link>
    </div>
  )
}

export default HomePage