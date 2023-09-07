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
        <div style={{ marginTop: '-180px' }}>
          <a>
              <img src="/Lindenphysics70-logo-bunny.png" alt="Logo" style={{ marginLeft: '20px', marginTop: '10px' }} />
          </a>
        </div>
        <div className={styles.grid} style={{ marginTop: '20px' }}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Introduction & Documentation&rarr;</h3>
            <p>Week one</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>2D Design & <br></br>Cutting&rarr;</h3>
            <p>Week two</p>
          </a>
          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Hand tools and fabrication&rarr;</h3>
            <p>Week three</p>
          </a>
          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
            <h3>Microcontroller Programming&rarr;</h3>
            <p>Week four</p>
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