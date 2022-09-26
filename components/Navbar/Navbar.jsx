
import { Row } from "reactstrap";
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';


const Navbar = (props) => {
    

    const styleList = {
        classType: props.styleprops.classType
    }

    const toggle = props.toggle ? styles.active__menu :  " ";



    const classStyle = styleList.classType === "cta_btn" ? styles.cta_btn : styles.rev_btn ;

    return (
       <Row>
            <div className={`${styles.nav_wrapper} d-flex justify-content-between align-items-center`}>


            {/* ===== logo ==== */}
        
            <div className={`${styles.logo}`}> 
                <Link href={`/`}><a><Image alt='Arnagon Logo' src={props.logo} className={`${styles.logo_img}`}/></a></Link> 
            </div>

            {/* /===== logo ==== */}


            {/* ===== Navbar ==== */}
                { props.hidden && <div className={`${styles.navigation}`}>
                    <div className={`${styles.nav__menu} ${toggle}`}>
                        {
                            props.links.map((item, index) => (
                                <Link className={`${styles.nav_links}`} href={item.path} key={index} > 
                                    {item.display} 
                                </Link>
                            ))
                        }
                    </div> 


                    <span className={`${styles.mobile_menu}`}>
                        <i className="ri-menu-line" onClick={props.showMenu}></i>
                    </span>
                
                </div> }

            {/* /===== Navbar ==== */}

                {/* ===== Cta ==== */}

                {/* <div className={`${classStyle}`}  style={styleList}>
                    <Link href={`/waitlist`}>{props.btnText}</Link>
                </div> */}

                {/* /===== Cta ==== */}
            

            </div>

        </Row>
    )
}

export default Navbar