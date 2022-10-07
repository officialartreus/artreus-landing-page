import { Container, Row, Col } from "reactstrap";
import Link from 'next/link';
import styles from './footer.module.css';
import ContactForm from "../UI/ContactForm";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const NAV_LINK = [
        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'Explore'
        },

        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'How It Works',
        },

    ];

    const NAV_LINKS = [


        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'Jobs',
        },


        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'Help Center',
        },


    ];

    return (
        <footer className={`${styles.footer_section} p-4`}>
            <Container>
                <hr />
                <Row className={`${styles.footer_first}`}>
                    <Col lg={4} md={12}>
                        <div className={`${styles.mail} mx-1`}>
                            <h3> Get the Latest Artreus updates </h3>
                            <ContactForm url={`/waitlist`} placeHolder="Your email" btnText="I'm in" formClass="hero_form_purple" />
                        </div>
                    </Col>

                    <Col lg={4} md={12}>
                        <div className={`${styles.footer_links} mx-4 d-flex justify-content-between align-items-center`}>
                            <div className={`${styles.link_left}`}>
                                <h5> Links </h5>
                                {
                                    NAV_LINK.map((item, index) => (
                                        <Link className={`${styles.nav_links}`} href={item.path} key={index} >
                                            {item.display}
                                        </Link>
                                    ))
                                }
                            </div>

                            <div className={`${styles.link_right}`}>
                                <h5> Links </h5>
                                {
                                    NAV_LINKS.map((item, index) => (
                                        <Link className={`${styles.nav_links}`} href={item.path} key={index} >
                                            {item.display}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={12}>
                        <div className={`${styles.community} mx-1`}>
                            <h5> Join Our Community </h5>
                            <div className={`my-2`}>
                                <Link href="https://twitter.com/OfficialArtreus?t=q893XHrXF6A1lv1ynNYNug&s=09"><i className={`${styles.c_links} ri-twitter-fill`}></i></Link>
                                {/* <Link href="#"><i className={`${styles.c_links} ri-youtube-fill`}></i></Link> */}
                                <Link href="https://discord.gg/r3c3ethUgs"><i className={`${styles.c_links} ri-discord-fill`}></i></Link>
                                <Link href="https://t.me/artreusOfficial"><i className={`${styles.c_links} ri-telegram-fill`}></i></Link>
                                {/* <Link href="#"><i className={`${styles.c_links} ri-instagram-fill`}></i></Link> */}
                            </div>
                        </div>
                    </Col>
                </Row>

                <hr />
                <Row className={`${styles.footer_second}`}>
                    <Col lg={12} md={12}>
                        <div className={`${styles.copyright} mb-2 d-flex justify-content-center align-items-center`}>
                            <span className={`${styles.content}`}>Copyright | {year}.  Artreus.</span>
                            <span className={`${styles.content}`}>All Rights Reserved.</span>
                            <span className={`${styles.content}`}>Terms.</span>
                            <span className={`${styles.content}`}>Privacy Policy.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer