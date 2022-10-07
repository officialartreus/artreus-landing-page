import { Container, Row, Col } from "reactstrap";
import styles from './about.module.css';
import Image from "next/image";
import Button from "../Button/Button";


const About = () => {

    return (
        <section className={`${styles.about_section} p-4`}>
            <Container>


                <Row>

                    <Col lg={6} md={12}>
                        <div className={`${styles.textbox}`}>
                            <div className="my-5">
                                <h3>Artreus NFT Marketplace</h3>
                            </div>
                            <div className="my-4">
                                <p> We provide you with the best platform to buy sell and interact with the best Nft projects out there.
                                </p>
                            </div>

                            <Button btnText={`Vist Marketplace`} styleName={`rev_btn`} />

                        </div>


                        <div className={`${styles.upcoming} my-5`}>
                            <div className="my-5">
                                <h3>Up coming Projects</h3>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12}>
                        <div className={`${styles.imgbox}`}>
                            <Image width={353} height={673} src="https://d5mhdc97neilw.cloudfront.net/Mockup.png" alt="vision" className={`${styles.img_fluid}`} />

                            <div className={`${styles.volume} p-1 d-flex justify-content-center align-items-center flex-column`}>
                                <span className="text-white">Over</span>
                                <h4 className="text-white">200,000</h4>
                                <span className="text-white">Users</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About