import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../widgets/header'
import Pitch from '../widgets/pitch'
import fourThreeThree from '../styles/formations/F433.module.css'
import fourFourTwo from '../styles/formations/F442.module.css'
import fourFiveOne from '../styles/formations/F451.module.css'
import fourTwoThreeOne from '../styles/formations/F4231.module.css'
import fourTwoTwoTwo from '../styles/formations/F4222.module.css'
import threeFourThree from '../styles/formations/F343.module.css'
import threeFiveTwo from '../styles/formations/F352.module.css'

function PitchBody(){

  const [formation, setFormation] = useState(fourThreeThree)

  function onchange(e){
    const value =  e.target.value
  
    switch (value){
      case '4-3-3':
        setFormation(fourThreeThree)
        break;
      case '4-4-2':
        setFormation(fourFourTwo)
        break;
      case '4-5-1':
        setFormation(fourFiveOne)
        break;
      case '4-2-3-1':
        setFormation(fourTwoThreeOne)
        break;
      case '4-2-2-2':
        setFormation(fourTwoTwoTwo)
        break;
      case '3-4-3':
        setFormation(threeFourThree)
        break;
      case '3-5-2':
        setFormation(threeFiveTwo)
        break;
      default:
        setFormation(fourThreeThree)
    }
  }

  return (
    <div className={styles.pitchBody}>
      <div className={styles.dropdownBox}>
        <p className={styles.dropdownTitle}>Pick a formation</p>
        <select onChange={onchange} className={styles.dropdown} name="formation" id="formation">
          <option value="4-3-3">4-3-3</option>
          <option value="4-2-2-2">4-2-2-2</option>
          <option value="4-2-3-1">4-2-3-1</option>
          <option value="4-4-2">4-4-2</option>
          <option value="4-5-1">4-5-1</option>
          <option value="3-5-2">3-5-2</option>
          <option value="3-4-3">3-4-3</option>
        </select>
      </div>
      <Pitch formation={formation}></Pitch>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Setup up your team</title>
        <meta name='description' content='Create your dream lineup'/>
        <meta name='keywords' content='Lineup, starting eleven, soccer, football, buildup, first team'/>
        <link rel="icon" href="icons8.png" />
      </Head>
      <main className={styles.body}>
        <Navbar></Navbar>
        <p className={styles.title}>Create your Dream Team Sheet</p>
        <PitchBody/>
      </main>
    </div>
  )
}
