import ListGroup from 'react-bootstrap/ListGroup';
import "../assets/css/UsersList.css"
function UsersList() {
  return (
    <div className='contenedor'>
      <ListGroup variant="flush">
        <h3>Usuarios:</h3>
      <ListGroup.Item>Ariadna Mazzocchi</ListGroup.Item>
      <ListGroup.Item>Ramón Marino</ListGroup.Item>
      <ListGroup.Item>Yago Sosa</ListGroup.Item>
      <ListGroup.Item>Uriel Sosa</ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default UsersList
