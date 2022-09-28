
import Image from 'next/image';
import styles from './team.module.css';

const TeamCard = ({ name, src, description, pos }) => {
    return (
        <div className={`${styles.team} card p-2`} >
            <div>
                <Image className={`${styles.team_img} p-2`} src={src} alt="" />
            </div>
            <div className={`${styles.team_text} p-2`}>
                <p className={`${styles.team_name} p-0 m-0`}>
                    {name}
                    <span>{pos}</span>
                </p>
                <p className={`${styles.team_detail}`}>{description}</p>
            </div>
        </div>
    )
}

export default TeamCard