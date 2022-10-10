import { Container, Row, Col } from "reactstrap";
import styles from './partner.module.css';
import Image from "next/image";

const Partners = () => {
    
    return (
        <section className={`${styles.partner} p-4`}>
            <Container>
                
                <Row>
                    
                    <Col lg={6} md={12} className="mx-auto">
                        <div className={`d-flex justify-content-around align-items-center`}>
                            <div className="mx-2">
                                <Image height={20} cover src={require('../images/clover.jpg')} alt="reef"/>
                            </div>
                            <div className="mx-2">
                                 <Image src={require('../images/caduceus.png')} alt="caduceus"/>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Partners
