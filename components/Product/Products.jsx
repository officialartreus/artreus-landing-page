import { Container, Row } from "reactstrap";
import Heading from "../UI/Heading";
import Product from "./Product";


const Products = () => {
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
        <section className={`p-4`}>
            <Container>
                <Row>
                    <Heading title="Our Products" fill="#5D50C6"/>
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

export default Products