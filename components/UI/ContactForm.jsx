import styles from './contactform.module.css';
import Link from 'next/link';


const ContactForm = (props) => {
    const styleClass = props.formClass == "hero_form_purple" ? styles.hero_form_purple : styles.hero_form;
    return (
        <div className={`${styleClass} d-flex justify-content-center align-items-center`}>
            <input type="text" placeholder={ props.placeHolder }/>
            <Link href={props.url}>{ props.btnText }</Link>
        </div>
    )
}

export default ContactForm 