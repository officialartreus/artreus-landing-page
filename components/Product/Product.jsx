import { Col } from "reactstrap";
import Link from 'next/link';
import styles from './product.module.css';
import Image from "next/image";



const Product = (props) => {

    const reduceMargin = props.reduce ? styles.reduce : "";
    
    return (
         <Col lg={4} md={12}>
            <div className={`${styles.product} ${reduceMargin} d-flex justify-content-center align-items-center flex-column`}>
                <Link href={`#product`}>{props.text.toUpperCase()}</Link>
                <Image src={props.imageUrl} alt="product image" /> 
            </div>  
        </Col>
    )
}

export default Product