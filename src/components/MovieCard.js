import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MovieCard({movie, deleteMovie}) {
  return (
    <div>
        <Card style={{ width: '18rem', marginBottom:"20px", marginTop:"10px" }}>
  <Card.Img variant="top" src={movie.posterUrl} height='300px' />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="danger" onClick={()=>deleteMovie(movie.id)}>Delete Movie</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard