import { Container, Row, Col } from "reactstrap";
import Link from 'next/link';
import styles from './buy.module.css';

const Buy = () => {

    return (
        <section className={`${styles.apply_section} p-3 pb-4`}>
            <Container>
                <Row>
                    <Col lg={6} md={12} className="mx-auto">
                        <div className={`d-flex justify-content-center align-items-center flex-column`}>

                            <div className="my-4 mb-2">
                                <p className="text-center text-white">
                                    Buy, Sell, Exchange crypto currency with fiat in a metaverse rental store!.
                                    Be the first to become an agent and own a rental space by minting one of the Artreus culture NFTs. <br /> Mint and own a Knigth, Samurai or Spartan NFT.
                                </p>

                            </div>

                            <div className={`${styles.apply_cta} py-2 px-3 my-3`}>
                                <Link href={`/`}>Mint Now</Link>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Buy