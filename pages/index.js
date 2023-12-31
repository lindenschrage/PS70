import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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
            <div style={{ marginLeft: '60px', marginTop: '-30px' }}>
              <a href="/PS70/about" className={styles.button1}>
                <h3>About Me!</h3>
              </a>
            </div>
        <div className={styles.grid} style={{ marginTop: '20px' }}>
          <a href="/PS70/week_one" className={styles.card}>
            <h3>Introduction & Documentation&rarr;</h3>
            <p>Week one</p>
          </a>
          <a href="/PS70/week_two" className={styles.card}> 
            <h3>2D Design & Cutting&rarr;</h3>
            <p>Week two</p>
          </a>
          <a href="/PS70/week_three" className={styles.card}>
            <h3>Hand tools and fabrication&rarr;</h3>
            <p>Week three</p>
          </a>
          <a href="/PS70/week_four" className={styles.card}>
            <h3>Microcontroller Programming&rarr;</h3>
            <p>Week four</p>
          </a>
          <a href="/PS70/week_five" className={styles.card}>
            <h3>3D Design & Printing&rarr;</h3>
            <p>Week five</p>
          </a>
          <a href="/PS70/week_six" className={styles.card}>
            <h3>Electronic Input Devices&rarr;</h3>
            <p>Week six</p>
          </a>
          <a href="/PS70/week_seven" className={styles.card}>
            <h3>Electronic Output Devices&rarr;</h3>
            <p>Week seven</p>
          </a>
          <a href="/PS70/week_eight" className={styles.card}>
            <h3>CNC Milling&rarr;</h3>
            <p>Week eight</p>
          </a>
          <a href="/PS70/week_nine" className={styles.card}>
            <h3>Radio, Wifi, Bluetooth&rarr;</h3>
            <p>Week nine</p>
          </a>
          <a href="/PS70/week_ten" className={styles.card}>
            <h3>Machine Building&rarr;</h3>
            <p>Week ten</p>
          </a>
          <a href="/PS70/final_project" className={styles.card}>
            <h3>Final Project&rarr;</h3>
            <p>Smart Pillbox</p>
          </a>
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
