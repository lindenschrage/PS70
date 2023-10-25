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
            <h3>Electronic Input Devices</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
            <p>First, I designed a Hall Effect Sensor. A Hall Effect Sensor is a device that detects the presence of a magnetic field and converts it into an electrical signal. I envisioned using this sensor as a prototype for my MVP. My idea was that for my pill box, the opening and closing actions could serve as indirect indicators to determine if the pills have been taken out.
                I began by crafting a small box with a hinged lid (3D model link here) and affixed small circular weights to both the top and bottom. My initial concept was to position the Hall Effect Sensor inside the box adjacent to one magnet. I thought that I would be able to discern the difference in readings when the box was open (next to one magnet) versus when it was closed (with two magnets in proximity).
            </p>   
            <p>After many unsuccessful attempts to get the sensor to function as desired, Nathan and I delved deep into online resources. We discovered that the Hall Effect Sensor we were using was digital, not analog. This meant it couldn't differentiate between the presence of one magnet versus two; it would only output binary readings (either 0 or 1). Consequently, I removed the internal magnets and substituted them with non-magnetic conductive metal washers. It's crucial for the face of the Hall Effect Sensor to be perpendicular to the magnet. I positioned it against the box so that its face was just beneath the location where the top magnet would fall. 
            </p>     
            <p>This is what my final Hall Effect Sensor circuit looked like:</p>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week6/hall_sensor_circuit.png" alt="Website Image" />
            <p>And here is the code that I used:
            </p>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week6/hall_effect_code.png" alt="Website Image" />
            <p>Following Nathan's advice, I measured the lid at various angles to determine the exact degree at which the sensor would detect the magnet. I found this angle to be 7.5 degrees.
            </p>
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week6/hall_effect_pic.png" alt="Website Image" />
            <p>Here is a video of the final working sensor!</p>
            <video style={{ width: '30%', height: '30%' }} src="/PS70/week3/hall_sensor_vid.mov" controls> </video>

            <p>For my next iteration, I plan to experiment with an analog sensor to see if it's a better fit for my project!</p>
        </div>
        <div className={styles.subcard2}>
            <p>Subsequently, I developed a capacitive weight sensor using two copper sheets separated by a foam block. I placed an empty cup on this DIY sensor and recorded the Arduino serial value each time I added water in 20mL increments, up to a total of 230mL.</p>
            <p>Here is what my set up looked like:</p>
            <img style={{ width: '10%', height: '10%' }} src="/PS70/week6/cap_sen_pic.png" alt="Website Image" />
            <p>Here is what my code and circuit looked like:</p>
            <img style={{ width: '10%', height: '10%' }} src="/PS70/week6/cap_sensor_code.png" alt="Website Image" />
            <img style={{ width: '10%', height: '10%' }} src="/PS70/week6/cap_sensor_circuit.png" alt="Website Image" />
            <p>And here are the results that I got:</p>
            <img style={{ width: '10%', height: '10%' }} src="/PS70/week6/cap_sen_tab.png" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/PS70/week6/cap_sen_pic.png" alt="Website Image" />
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
