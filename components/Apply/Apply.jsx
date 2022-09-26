import { Container, Row, Col } from "reactstrap";
import Link from 'next/link';
import styles from './apply.module.css';

const Apply = () => {
    
    return (
        <section className={`${styles.apply_section} p-4`}>
            <Container>
                
                <Row>
                    
                    <Col lg={6} md={12} className="mx-auto">
                        <div className={`d-flex justify-content-center align-items-center flex-column`}>
                            <div className="my-3">
                                <h3>Apply For Listing</h3>
                            </div>

                            <div className="my-3">
                                <p className="text-center text-white">Do you hace an NFT project you want to introduce to a wide range of interested individuals in the crypto space? apply bellow to get your nft art featured on our marketplace</p>
                            </div>

                            <div className={`${styles.apply_cta} py-2 px-3 my-3`}>
                                <Link href={`/`}>Apply For Listing</Link>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Apply