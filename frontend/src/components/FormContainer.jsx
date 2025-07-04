// import { Container, Row, Col } from 'react-bootstrap';

// const FormContainer = ({ children }) => {
//   return (
//     <Container>
//       <Row className='justify-content-md-center'>
//         <Col xs={12} md={6}>
//           {children}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FormContainer;
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container
      style={{
        background: 'linear-gradient(135deg, #d4fc79, #96e6a1, #89f7fe)',
        padding: '2rem',
        borderRadius: '10px',
      }}
    >
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
