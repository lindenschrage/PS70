import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WeekOne() {
    return (
    <div className={styles.container}>
        <Head>
            <title>Linden Schrage</title>
            <link rel="icon" href="/ears.png" />
            <link rel="stylesheet" href="https://use.typekit.net/vcn8gqm.css" />
        </Head>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: '0px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="none" stroke="#b502f4" stroke-width="15" d="M0,64L80,58.7C160,53,320,43,480,74.7C640,107,800,181,960,181.3C1120,181,1280,107,1360,64L1440,21"></path>
            </svg>
            <div style={{ marginTop: '-160px' }}>
                <a href="/">
                    <img src="/Lindenphysics70-logo-bunny.png" alt="Logo" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </a>
            </div>
        <div className={styles.grid} style={{ marginTop: '20px' }}>
          <div className={styles.subtitle}>
            <h3>Introduction & Documentation</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
            <p>This week I developed a website using React! Here's a picture of some of the code running the page that you're seeing right now :)</p>
            <img style={{ width: '50%', height: '50%' }} src="/website_image.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
            <p>Here are my top three ideas for a final project (in order of priority). </p>
            <p> One idea I have is developing a "smart" pill case. My grandmother has to take a lot of medication, three times a day, and she has trouble remembering to take it. My vision for this product is a pill case with a sensor at the bottom that would send a reminder text if the medication hasn't been taken out. My design vision is similar to a mancala board but with three slots instead of two (for Morning, Afternoon, and Evening) </p>
            <img style={{ width: '30%', height: '30%' }} src="/mancala.png" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/pill_organizer.jpg" alt="Website Image" />

        </div>
      </div>
      <style jsx>{`
        html, body {
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
  
}
