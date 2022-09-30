import { Container, Row, Col } from "reactstrap";
import styles from './team.module.css';
import Slider from "./slider";
import Buy from "../Buy/Buy";



const Team = () => {
    return (
        <section className={`${styles.team_section} p-4`}>
            <Container>

                <div className={`${styles.team_head}`}>
                    <div className="my-5">
                        <h3>The Team</h3>
                    </div>

                    <Slider />
                </div>

                {/* <Row>
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

                </Row> */}
            </Container>
        </section>
    )
}

export default Team