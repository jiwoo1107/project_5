import './App.css';
import {Container, Navbar, Nav, Row, Col, Carousel} from 'react-bootstrap';


function App() {

  return (
    <div className="App">
     <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home">carrhartt</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">남성</Nav.Link>
            <Nav.Link href="#pricing">여성</Nav.Link>
            <Nav.Link href="#pricing">악세사리</Nav.Link>
            <Nav.Link href="#pricing">룩북</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      <Carousel>
      <Carousel.Item>
      <img src="img/slide1.png"/>
        <Carousel.Caption>
          <h3>HEART BANDANA COLLECTION</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="img/slide2.png"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="img/slide3.png"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="img/slide4.png"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    
      
    <Container>

  <Row className='cate' >

    <Col md={3} className='col1'>
      <img src="/img/jacket.jpg" width="100%" height="80%"/>
      <h4>JACKET</h4>
    </Col>

    <Col md={3}>
    <img src="/img/jacket.jpg" width="100%" height="80%"/>
      특집
    </Col>

    <Col md={3}>
    <img src="/img/jacket.jpg" width="100%" height="80%"/>
      콜라보레이션
    </Col>

    <Col md={3}>
    <img src="/img/jacket.jpg" width="100%" height="80%"/>
      악세사리
    </Col>

  </Row>

</Container>


  
    </div>
  );
}

export default App;
