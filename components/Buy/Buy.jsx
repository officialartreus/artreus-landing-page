import { Container, Row, Col, Badge } from "reactstrap";
import Link from 'next/link';
import styles from './buy.module.css';


const Buy = () => {



    return (
        <section className={`${styles.apply_section} p-3 pb-4`}>
            <Container>
                <Row>
                    <Col lg={6} md={12} className="mx-auto">
                        <div className={`d-flex justify-content-center align-items-center flex-column`}>

                            <div className="my-1 mb-1 text-white">

                                <div className={`${styles.vid_con} py-2`}>
                                    <video className={`${styles.vid} `} autoPlay loop muted>
                                        <source src="http://d5mhdc97neilw.cloudfront.net/NFT_PASS.mp4" type="video/mp4" />
                                    </video>
                                </div>

                                <p className="text-center py-3 ">
                                    Buy, Sell, Exchange crypto currency with fiat in a metaverse rental store!.
                                    Be the first to become an agent and own a rental space by minting one of the Artreus culture NFTs. <br /> Mint and own a Knigth, Samurai or Spartan NFT.
                                </p>
                            </div>

                            <div className={`${styles.apply_cta} py-2 px-3 my-3 `}>
                                {/* <Link href={`/`} onClick={e => _onClick(e)}>Mint Now (Coming Soon)</Link> */}
                                <span className="px-2">Mint Now</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Buy