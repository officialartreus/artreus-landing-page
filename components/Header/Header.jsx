
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Logo from '../images/artreus_logo.png';
import styles from './header.module.css';
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Button from "../Button/Button";


const Header = () => {
    const NAV_LINK = [
        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'Developers'
        },

        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'LaunchPad',
      },

        {
            path: 'https://discord.gg/r3c3ethUgs',
            display: 'Metaverse',
        },

        {
            path: '#marketplace',
            display: 'Marketplace',
        }
    ];

    // NFT ecosystem for marketplace, games,art and collectibles
    // Join the Community


    // We provide you with the best platform to buy sell and interact with the best Nft projects out there.




    // Apply for Listing
    // Do you hace an NFT project you want to introduce to a wide range of interested individuals in the crypto space? apply bellow to get your nft art featured on our marketplace

    // Apply for Listing

    const selector = {
        classType: "cta_btn"
    }

    const [toggleMenu, setToggleMenu] = useState(false);

    function switchMenu() {
        setToggleMenu(prevToggle => !prevToggle);
    }

    return (
        <header className={`${styles.header}`}>
            <Container>
                <Navbar
                    logo={Logo}
                    links={NAV_LINK}
                    btnText="Join Waitlist"
                    styleprops={selector}
                    hidden={true}
                    showMenu={switchMenu}
                    toggle={toggleMenu}
                />

                <Row className={`${styles.hero}`}>
                    <Col lg={6} md={12}>
                        <div className={`${styles.hero_text}`}>
                            <h5>Welcome to Artreus</h5>
                            <h3>NFT ecosystem for marketplace, games, art and collectibles</h3>
                        </div>

                        <div className={`${styles.hero_btn}`}>
                            <Button btnText={`Join the Marketplace`} styleName={`cta_btn`} />
                        </div>

                    </Col>

                    <Col lg={6} md={12}>
                        <div className={`${styles.hero_gif} mb-4`}>
                            <Image unoptimized={true} width="500" height="600" src="http://d5mhdc97neilw.cloudfront.net/art.gif" alt="The Artreus globe" />
                        </div>

                    </Col>
                </Row>

            </Container>


        </header>
    )
}

export default Header
