import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0f2027, #2c5364, #00c6ff)',
        color: '#fff',
      }}
    >
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>CAMPUSCART &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
