import styles from './button.module.css';
import Link from 'next/link';


const Button = (props) => {

    const changeColor = props.styleName === "rev_btn" ? styles.rev_btn : styles.cta_btn;

    return (
        <div className={`${changeColor} py-2 px-3 d-flex justify-content-center align-items-center`}>
            <Link href={`/`}>{props.btnText}</Link>
            <i className={`${styles.c_links} ri-arrow-right-line mx-4`}></i>
        </div>
    )
}

export default Button