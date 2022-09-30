import { Container, Row, Col } from "reactstrap";
import Link from 'next/link';
import styles from './buy.module.css';

const Buy = () => {

    return (
        <section className={`${styles.apply_section} p-4`}>
            <Container>
                <Row>
                    <Col lg={6} md={12} className="mx-auto">
                        <div className={`d-flex justify-content-center align-items-center flex-column`}>

                            <div className="my-2 mb-0">
                                <p className="text-center text-white">
                                    Buy, Sell, Exchange crypto currency with fiat in a metaverse rental store.
                                    Be the first to become an agent and own a rental space by minting one of the Artreus culture Nfts Mint and own a knigth, samurai or spartan.
                                </p>
                                {/* <p className="text-center text-white">
                                    Be the first to become an agent and own a rental space by minting one of the Artreus culture Nfts Mint and own a knigth, samurai or spartan.
                                </p> */}
                            </div>

                            {/* <div className={`${styles.apply_cta} py-2 px-3 my-3`}>
                                <Link href={`/`}>Apply For Listing</Link>
                            </div> */}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Buy