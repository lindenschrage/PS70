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
            <h3>3D Design & Printing</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
            <p>Drawing on my interest in knot theory, I thought I'd try my hand at 3D printing a trefoil knot, which is the first nontrivial knot. The knot is a curve characterized by three parametric equations: </p>
              
              <ul>
                <li>x = sin(t) + 2sin(2t)</li>
                <li>y = cos(t) - 2cos(2t)</li>
                <li>z = -sin(3t)</li>
              </ul>
            <p>I imputed these equations in Grasshopper to create the curve. I then added 3mm radius piping around the curve lines to create a 3D shape. The first time I printed the knot it didn’t work out because I hadn’t added adequate support (the adhesion to the base plate wasn’t strong because the knot only touches the base at two points). After adding support, I printed it again, and it came out really well!</p>
            <a download href='/PS70/week5/trefoil_knot_nobase.3dm'>Download my 3D Model file </a>
            <br></br>
            <a download href='/PS70/week5/trefoil_knot_nobase.stl'>Download my STL file </a>
            <br></br>
            <a download href='/PS70/week5/trefoil_knot_nobase_0.3mm_PLA_MK3S_16h48m.gcode'>Download my gcode file </a>
            <br></br>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week5/knot_stl.png" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week5/knot.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
          <p>I also spent this week getting more familiar with photogrammetry. I scanned a really interesting organic shape that I found in the PS70 lab and was able to convert that scanning into an STL file, so that I am now able to print my own version of that shape! </p>
          <a download href='/PS70/week5/linden-blob-3dprint_mesh.obj'>Download my 3D Model file </a>
          <br></br>
          <br></br>
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week5/ball.png" alt="Website Image" />
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week5/ball_stl.png" alt="Website Image" />
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
