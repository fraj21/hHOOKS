import React from 'react';
import {Card,Button} from 'react-bootstrap';



function MovieCard({mov}) {
return <div> 
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={mov.posterUrl} />
<Card.Body>
<Card.Title>{mov.title}</Card.Title>
<Card.Text>
  {mov.description}
</Card.Text>
<Card.Text>
  {mov.rate}
</Card.Text>
<Button variant="primary">Go somewhere..</Button>
</Card.Body>
</Card>
</div>
}

export default MovieCard;