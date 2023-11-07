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
                    <img src="/PS70/Lindenphysics70-logo-bunny.png" alt="Logo" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </a>
            </div>
        <div className={styles.grid} style={{ marginTop: '20px' }}>
          <div className={styles.subtitle}>
            <h3>CNC Milling</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
            <p>
                This week, I focused on three key projects. First, I crafted a pill container using the Shopbot. I began by designing a simple one hole pill box in Rhino and then exported the 3dh file as an STL. It was a challenge to operate the Shopbot with an STL file, but with Bobby's assistance, I managed to create a functional design by adding a border in the Aspire software. I aim to refine this design by implementing filleted edges instead of the current square ones for the upcoming week. This challenege was a really important one for my final project because it was a good reminder of the big difference between wood and 3d prints. Some of the designs I've been 3D printing for my final pill container will need to be reworked to be able to be succesfully cut with the shopbot.
            </p>
            <p>
                Here's a pic of what my first draft looks like:
            </p>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week8/shopbot.jpg" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
            <p>
                Second, for my friend Rory's birthday, I embarked on creating a personalized chocolate mold with her name engraved. Despite an initial setback due to the print not adhering properly to the print bed, the addition of a brim to the base helped stabilize the structure, and the second attempt was successful. However, I encountered another issue when the mold began leaking because I hadn't included proper borders in my design. I plan to rectify this by incorporating a 3D printed border in my next attempt.
            </p>
            <p>Shoutout to Bobby for the expert photography!</p>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week8/rory_1.jpg" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week8/rory_2.jpg" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week8/rory_3.jpg" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
            <p>
                Lastly, I worked on my final project! I added an oval cutout in the middle of hall effect sensor cutouts which extends the whole way through the material. I soldered wires to the ends of the hall effect sensors and then threaded them through the oval holes in the pill box. This way, all of the circuitry can be hidden in the bottom of the device. 
            </p>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week8/cutout_1.jpg" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week8/cutout_2.jpg" alt="Website Image" />
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
