import { Card, CardBody, Col, Container, Row } from "reactstrap";
import JsPDFComponent from "../js-pdf/js-pdf-component";
import PDFRendererComponent from "../pdf-renderer/pdf-renderer-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home-page-style.css'
const HomePage = () => {
    return (
      <div className="home-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="grey-box">
                <CardBody>
                  <JsPDFComponent />
                  <PDFRendererComponent />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default HomePage;