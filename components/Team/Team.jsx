import { Container, Row, Col } from "reactstrap";
import styles from './team.module.css';
import Product from "../Product/Product";
import Slider from "./slider";



const Team = () => {

    const PRODUCTS = [
        {
            text: "nft Launchpad",
            imageUrl: require('../images/MacBook_16.png'),
            reduce: true,
        },

        {
            text: "nft marketplace",
            imageUrl: require('../images/MacStudio.png'),
            reduce: false,
        },

        {
            text: "token launchpad",
            imageUrl: require('../images/MacBook_18.png'),
            reduce: true,
        }

    ];


    return (
        <section className={`${styles.team_section} p-4`}>
            <Container>


                <div className={`${styles.team_head}`}>
                    <div className="my-5">
                        <h3>The Team</h3>
                    </div>

                    <Slider />

                </div>
                <Row>

                    <Col lg={6} md={12}>

                    </Col>


                </Row>

                <Row>
                    {
                        PRODUCTS.map((item, i) => (
                            <Product
                                key={i}
                                text={item.text}
                                imageUrl={item.imageUrl}
                                reduce={item.reduce}
                            />
                        ))
                    }

                </Row>
            </Container>
        </section>
    )
}

export default Team