import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Overlay from './Overlay'

export default function Home() {
  let [display, setDisplay] = useState(false);
  let [imgUrl, setImgUrl] = useState('');
  let [adText, setAdText] = useState('');

  // Create Ad
  const handleClick = () => {
    if (imgUrl.startsWith('https://') && adText) setDisplay(true);
  }

  // Hide Ad by clicking on video
  const hideAd = (e) => {
    if (display) setDisplay(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Custom Ad</title>
        <meta name="description" content="Create custom adds using Nextjs" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create Custom Ads
        </h1>

        <input onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} className={styles.input} placeholder='Insert Img URL' type="text"></input>
        <input onChange={(e) => setAdText(e.target.value)} value={adText} className={styles.input} placeholder='Insert Text' type="text"></input>
        <button onClick={handleClick} className={styles.button}> Create Ad</button>

        <div className={styles.content}>
          <Overlay display={display} imgUrl={imgUrl} adText={adText}/>
          <video onClick={hideAd} className={styles.video} controls>
            <source src="https://res.cloudinary.com/dalu46/video/upload/v1650733238/Play_New___Nike_kepz27.mp4" />
          </video>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <b>Custom Ads 2022</b>
        </p>
      </footer>
    </div>
  )
}
