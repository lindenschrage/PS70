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
        <div className={styles.grid} style={{ marginLeft: '40px', marginTop: '20px' }}>
          <div className={styles.subtitle1}>
            <h3>About Me!</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
            <p> Hey! I'm a senior in Mather studying math. I'm originally from San Francisco and these Cambridge winters have made me qustion why I ever left. At home, I have two dogs who I miss when I'm at school! When I'm not PSeting in Smith, I can be found baking, crafting, or walking by the Charles.  </p>
            <img style={{ width: '20%', height: '20%' }} src="/PS70/me.png" alt="Website Image" />
            <img style={{ width: '20%', height: '20%' }} src="/PS70/moose.JPEG" alt="Website Image" />
            <img style={{ width: '26.6%', height: '26.6%' }} src="/PS70/cake.png" alt="Website Image" />
            <img style={{ width: '20%', height: '20%' }} src="/PS70/table.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
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
