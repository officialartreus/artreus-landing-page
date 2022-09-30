
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './team.module.css';

import ceo from "../images/ceo.jpg";
import coo from "../images/coo.jpg";
import cmo from "../images/cmo.jpg";
import cgo from "../images/cgo.jpg";
import TeamCard from './TeamCard';


const Slider = () => {

    return (
        <>
            <div className={`${styles.team_slider}`}>
                <Slide className={`${styles.team_slider}`}>
                    <div className="each-slide-effect">
                        <TeamCard src={ceo} name={"Ricky Feil"} pos={"CEO"} description={"Ex polygon founding member, Sushi advisor, LP mable"} />
                    </div>

                    <div className="each-slide-effect">
                        <TeamCard src={coo} name={"Mona Paul"} pos={"COO"} description={"Team lead, solidity developer"} />
                    </div>

                    <div className="each-slide-effect">
                        <TeamCard src={cmo} name={"Michael O`Tega"} pos={"CMO"} description={"Ethsign community advocate, Marketing officer at Altostream"} />
                    </div>

                    <div className="each-slide-effect">
                        <TeamCard src={cgo} name={"Joshua Taiwo"} pos={"CGO"} description={"UI/UX design, product design, growth lead at Altostream"} />
                    </div>

                </Slide>
            </div>

            <div className='mb-4'>
                <div className={`${styles.team_no_slide} `}>
                    <div className={`${styles.teams_card} `}>
                        <TeamCard src={ceo} name={"Ricky Feil"} pos={"CEO"} description={"Ex polygon founding member, Sushi advisor, LP mable"} />
                    </div>

                    <div className={`${styles.teams_card} `}>
                        <TeamCard src={coo} name={"Mona Paul"} pos={"COO"} description={"Tead, solidity developer"} />
                    </div>
                    <div className={`${styles.teams_card} `}>
                        <TeamCard src={cmo} name={"Michael O`Tega"} pos={"CMO"} description={"Ethsign community advocate, Marketing officer at Altostream"} />
                    </div>

                    <div className={`${styles.teams_card} `}>
                        <TeamCard src={cgo} name={"Joshua Taiwo"} pos={"CGO"} description={"UI/UX design, product design, growth lead at Altostream"} />
                    </div>

                </div>
            </div>
        </>

    );
};

export default Slider;