// import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function App(){
return (
    <>
    <h1 className='text-center text-black bg-secondary p-4'>Bienvenidos</h1>
    <Carousel slide={false}>
      <Carousel.Item>
        <img style={{ width : "25rem" }}
          className="d-block w-0"
          src="../../img/s22verde.png"
        />
        <Carousel.Caption>
          <h3 className='text-black'>First slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width : "18rem"  }}
          className="d-block w-0"
          src="../../img/s21fe-dorado.jpg"
        />

        <Carousel.Caption>
          <h3 className='text-black'>Second slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width : "18rem"  }}
          className="d-block w-0"
          src="../../img/iphone13pro-azul.jpg"
        />

        <Carousel.Caption>
          <h3 className='text-black'>Third slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
)

}

export default App;
