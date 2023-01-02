import { Card } from "react-bootstrap"

const Cardkegiatan = (props) => {
    return (
        <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
            {props.berita}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Cardkegiatan