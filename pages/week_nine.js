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
            <h3>Radio, WiFi, Bluetooth</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
        <p>
          This week, Manas and I tackled the networking assignment by creating an LED display to indicate the day of the week. We started by designing a display that had seven distinct slots, each representing a different day. Our design included pass-through holes for each slot, which allowed us to run wiring to connect the electronics from underneath. After finalizing the prototype design, we proceeded to 3D print it.
        </p>
        <a download href='/PS70/week9/networking_assignment.gh'>Download the Grasshopper file </a>
        <img style={{ width: '30%', height: '30%' }} src="/PS70/week9/networking_rhino.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
          <p>
          To ensure our display would show the correct day, we used an ESP32 board, which is a microcontroller with Wi-Fi capability. This board was programmed to retrieve the current day from an NTP server. An NTP server is a dedicated computer that uses the Network Time Protocol to provide devices with the precise time and date, ensuring our display would always be accurate.
          </p>
          <p>
            Here is what our code looked like:
          </p>
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week9/code1.png" alt="Website Image" />
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week9/code2.png" alt="Website Image" />
          <a download href='/PS70/week9/NTP_website.png'>Download the Ardunio code file </a>

        </div>
        <div className={styles.subcard2}>
        While the printing was underway, we focused on coding. We started by experimenting on a breadboard, connecting several LEDs to the ESP32 using resistors and tested our code. With the code working correctly, we moved on to constructing the final product. We soldered wires to the LEDs and carefully placed them into the designed slots of our display. After setting up the circuitry and initiating our code, the display came to life, with the green LED shining brightly to indicate that it was Thursday.
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
