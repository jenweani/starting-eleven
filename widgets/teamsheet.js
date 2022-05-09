import styles from '../styles/TeamSheet.module.css'
import {useState} from 'react'

function Player({ shirtColor }){
    const [playerName, setPlayerName] = useState('placeholder')
    const [shirtNo, setShirtNo] = useState(88)
    const numColor = shirtColor === '#ffffff'? '#000000' : '#ffffff'

    return(
        <div className={styles.playerBox}>
            <div className="player">
                <span className="playerNo">{shirtNo}</span>
                <style jsx>{`
                    .playerNo{
                        position: relative;
                        margin: auto;
                        font-size: 12px;
                        font-weight: bold;
                        color:${numColor};
                    }
                    .player{
                        display: flex;
                        justify-content: center;
                        height: 45px;
                        width: 28px;
                        background-color: ${shirtColor};
                        margin: auto;
                        border-radius: 10px 10px 2px 2px;
                    }
                    
                    .player::before{
                        content: '';
                        height: 20px;
                        width: 12px;
                        margin-top: 2px;
                        margin-left: -30px;
                        background-color: ${shirtColor};
                        position: absolute;
                        transform: rotate(55deg);
                        border-radius: 2px;
                    }
                    
                    .player::after{
                        content: '';
                        height: 20px;
                        width: 12px;
                        margin-top: 2px;
                        margin-left: 30px;
                        background-color: ${shirtColor};
                        position: absolute;
                        transform: rotate(-55deg);
                        border-radius: 2px;
                    }
                `}</style>
            </div>
            <div className={styles.playerName}>{playerName}</div>
        </div>
        
        
    )
}

export default function ({formation, shirtColor, gkShirtColor}){

    return (
        <div className={formation.teamsheet}>
            
            <div id={formation.first} className={styles.playerContainer}>
                <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.second} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.third} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.fourth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.fifth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.sixth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.seventh} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.eight} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.ninth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.tenth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.eleventh} className={styles.playerContainer}>
            <Player shirtColor={gkShirtColor}/>
            </div>
        </div>
    )
}