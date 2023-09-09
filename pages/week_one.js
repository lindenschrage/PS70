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
                <a href="/PS70">
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
            <p >The first  concept I'm exploring is the creation of a "smart" pill organizer. Given that my grandmother is on multiple medications and needs to take them three times a day, she often struggles to recall her dosages. I envision this product as a pill organizer with sensors at the base of each compartment. If medication isn't retrieved, it would trigger a reminder text. The design would resemble a mancala board, but modified to feature three compartments to signify Morning, Afternoon, and Evening doses.</p>
            <p>
              <img style={{ width: '15%', height: '15%' }} src="/PS70/mancala.png" alt="Website Image" />
              <img style={{ width: '20%', height: '20%' }} src="/PS70/pill_organizer.jpg" alt="Website Image" />
              <img style={{ width: '25%', height: '25%' }} src="/PS70/wooden_pill.png" alt="Website Image" />
            </p>

            <p>My next proposal is to develop an automated plant care system tailored for dormitory settings. Given my own brown thumb, this automated setup would guarantee consistent care by ensuring the plants receive appropriate amounts of water and light. The design could incorporate a 3D-printed pot equipped with integrated moisture sensors.</p>
            <p>My last idea would be combine the elegance of traditional analog watches with the functionality of modern step counters to craft an analog-style pedometer watch. This device would count and display the wearer's steps with a classic hand (like an hour or minute hand on a watch) while retaining the aesthetic appeal of traditional watched.</p>

            

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
