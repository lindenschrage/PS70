import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WeekOne() {
    return (
    <div className={styles.container}>
        <Head>
            <title>Week Four</title>
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
            <h3>Microcontroller Programming</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
            <p>My main goal for this week was to iterate on my design from last week. These are the three main tasks that I set out to accomplish: </p>
              <ul>
                <li> Improve the support structure </li>
                  <ul>Build a sturdier cardboard support box</ul>
                  <ul>Decrease the size of the Hoberman circle so that it won't get caught on the edges of the box top</ul>
                <li>Incorporate arduino programming</li>
                  <ul>Include a button system with a pull down resistor</ul>
                  <ul>Use a potentiometer to decrease the speed of the motor</ul>
                  <ul>Draw a schematic of the circuit system </ul>
              </ul>
        </div>
        <div className={styles.subcard2}>
            <p>I started on my first task by building a box with a shorter height and larger base. I then remade my Hoberman circle with a smaller length and width and cut the final design out of a 1/8” sheet of plywood. The resulting circle had a diameter of 6”, which fit perfectly on my new support system!</p>
            <p>Lastly, I printed out another center stick (one that fit better with the newer, smaller model) and I secured the circle to the box using a screw. </p>
            <img style={{ width: '50%', height: '50%' }} src="/PS70/week4/new_clock.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
          <p>I then integrated a arduino circuit into my design. First, I added an on/off button so that the motor would only run when the button was pressed (see the circuit schematic below). Then, I integrate a potentiometer into the circuit. This allowed me to decrease the speed of the motor (and increase the torque), which ultimately allowed the clock mechanism to move much more smoothly.</p>
          <img style={{ width: '50%', height: '50%' }} src="/PS70/week4/circuit_diagram.jpg" alt="Website Image" />
          <video style={{ width: '30%', height: '30%' }} src="/PS70/week4/circuit.MOV" controls> </video>
        </div>
        <div className={styles.subcard2}>
          <p>Lastly, I wrote an Arduino script that allowed me to integrate the motor and the button.</p>
          <img style={{ width: '50%', height: '50%' }} src="/week4/wk4_code.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
          <p>In the end, everything came together and my motor system finally worked! Woohoo!</p>
          <video style={{ width: '50%', height: '50%' }} src="/PS70/week4/final.MOV" controls> </video>

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
