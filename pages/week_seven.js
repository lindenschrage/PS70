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
            <h3>Electronic Output Devices (+ MVP)</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
          <p>
          This week, I created a basic working model of my smart pill container. I dedicated my efforts to refining the container's design, alternating between using Rhino, especially Grasshopper, and 3D printing.
          </p>
        </div>
        <div className={styles.subcard2}>
          <p>
            My initial design consisted of two components: a base with fourteen spherical cutouts arranged in a 2x7 grid, and corners designed to house hall effect sensors; and a lid, which is half the height of the base and has circular cutouts for magnets. Both parts have rounded, fileted edges for a smoother finish.
          </p>
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week7/mancala.png" alt="Website Image" />
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week7/mancala_gh.png" alt="Website Image" />
          <p>You can download the grasshopper file here:</p>
          <a download href='/PS70/week7/mancala.gh'>Download my Grasshopper file.</a>
        </div>
        <div className={styles.subcard2}>
          <p>
            In my second iteration, I scaled down the design to have only one compartment, resembling a single-day pillbox. This compact version aimed to simplify the design for 3d printing. I was able to scale my design really easily because many (if not all) of the components of my original design are parametric and therefore easily adjustable.
          </p>
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week7/one_hole.png" alt="Website Image" />
          <p>
          After printing the second design, I attached hinges externally to connect the lid and base and secured magnets to the lid with hot glue. I also installed the hall effect sensors.
          </p>
        </div>
      </div>
      <div className={styles.subcard2}>
        <p>
          For the third iteration, I experimented with an integrated hinge mechanism. However, after some consideration, I decided to continue with the versions without hinges, as they presented a more refined and delicate appearance.
        </p>
        <img style={{ width: '30%', height: '30%' }} src="/PS70/week7/hinges.png" alt="Website Image" />
      </div>
      <div className={styles.subcard2}>
        <p>Add pictures of final MVP, and hinge design</p>
      </div>
      <div className={styles.subcard2}>
        <p>
          While I’ve spent time in Grasshopper for previous assignments, this week is the first week where I really felt comfortable with the software.Even though it’s just a physical model, this is definitely the thing I’m most proud of that I’ve made so far. The first time I used Grasshopper, it felt so confusing and overwhelming, and it’s amazing to me how much I’ve been able to improve in such a short amount of time. 
        </p>
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
