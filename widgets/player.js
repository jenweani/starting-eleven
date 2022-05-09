import styles from '../styles/TeamSheet.module.css'
import {useState} from 'react'
import Popup from 'reactjs-popup'

function Player({ shirtColor, playerName, shirtNo }){
    
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

export default function ({shirtColor}) {
    const [playerName, setPlayerName] = useState('placeholder')
    const [shirtNo, setShirtNo] = useState(88)

    return(
        <div>
            <Popup  trigger={
                <button className='button'>
                    <Player shirtColor={shirtColor} playerName={playerName} shirtNo={shirtNo} />
                </button>
            } position="right center">
                <div className='popup'>
                    <label id='nameInputLabel' htmlFor="nameInput">Player Name:</label>
                    <input onChange={(e) => setPlayerName(e.target.value)} type="text" id='nameInput' value={playerName}/>
                    <label id='shirtNoInputLabel' htmlFor="shirtNoInput">Shirt Number:</label>
                    <input onChange={(e) => setShirtNo(e.target.value)} type="text" id='shirtNoInput' value={shirtNo} maxLength={2}/>
                </div>
            </Popup>
            
            <style jsx>{`
                .button{
                    background-color: transparent;
                    border: none;
                }
                .popup{
                    height: 140px;
                    width: 200px;
                    background-color: white;
                    border-radius: 10px;
                    padding: 10px;
                    box-shadow: 2px 2px 4px #888888;
                }
                #nameInputLabel{
                    font-size: 12px;
                }
                #nameInput{
                    display: inline;
                }
            `}</style>
        </div>
    )
}