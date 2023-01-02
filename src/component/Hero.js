import { Carousel } from "react-bootstrap"
import hero1 from './../assets/hero1.jpg'
import hero2 from './../assets/hero2.jpg'
import hero3 from './../assets/hero3.jpg'

const Hero = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Surya Kencana</h3>
            <p>Alun-alun Surya Kencana merupakan salah satu bukti kemegahan alam.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Gunung Pangrango</h3>
            <p>Gunung Pangrango mempunyai ketinggian setinggi 3.019 meter dari permukaan laut.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Jembatan Gantung Situ Gunung</h3>
            <p>
            Merupakan jembatan gantung terpanjang di Asia Tenggara.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default Hero