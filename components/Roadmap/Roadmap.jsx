
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styles from './roadmap.module.css';



export const Roadmap = () => {
    return (
        <div>
            <div className={`${styles.team_head}`}>
                <div className="my-5">
                    <h3>Roadmap</h3>
                </div>
            </div>

            <VerticalTimeline
                lineColor='#5d50c6'
                className={`${styles.team_head}`}
                animate={false}
            >
                <VerticalTimelineElement
                    date="Q4 2022"
                    dateClassName={`${styles.date_classname}`}
                    iconStyle={{ background: '#5d50c6' }}
                    contentStyle={{
                        background: '#5d50c6', color: '#fff'
                    }}
                    visible={true}
                >
                    <ul>
                        <li>~ Team formation</li>
                        <li>~ Community</li>
                        <li>~ Marketplace (UI design)</li>
                        <li>~ Caduceus Partnerships</li>
                        <li>~ AMA with collabs</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    visible={true}
                    date="Q1 2023"
                    dateClassName={`${styles.date_classname}`}
                    iconStyle={{ background: '#5d50c6' }}
                    contentStyle={{
                        background: '#5d50c6', color: '#fff'
                    }}
                >
                    <ul>
                        <li>~ Token/Nft staking (testnet)</li>
                        <li>~ Launch launch launch (Market-place, Token and Nft staking platform)</li>
                        <li>~ Token sales on Caduceus</li>
                        <li>~ AMA with top communities</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    visible={true}
                    date="Q2 2023"
                    dateClassName={`${styles.date_classname}`}
                    iconStyle={{ background: '#5d50c6' }}
                    contentStyle={{
                        background: '#5d50c6', color: '#fff'
                    }}
                >
                    <ul>
                        <li>~ Dex (testnet)</li>
                        <li>~ Certik Audit</li>
                        <li>~ p2p wallet development</li>
                        <li>~ Metaverse development Partnerships</li>
                        <li>~ The Hidden World (metaverse development)</li>
                        <li>~ Partnership with L1 blockchains</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    visible={true}
                    date="Q3 2023"
                    dateClassName={`${styles.date_classname}`}
                    iconStyle={{ background: '#5d50c6' }}
                    contentStyle={{
                        background: '#5d50c6', color: '#fff'
                    }}
                >
                    <ul>
                        <li>~ Mobile application development (IOS/Android)</li>
                    </ul>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
