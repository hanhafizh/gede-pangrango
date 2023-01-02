import { Card, Button } from "react-bootstrap";

const Cardjalur = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.judul}</Card.Title>
          <Card.Text>
            {props.keterangan}
          </Card.Text>
          <Button variant="primary">Lihat detail</Button>
        </Card.Body>
      </Card>
    )
}

export default Cardjalur