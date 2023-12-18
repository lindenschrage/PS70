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
            <h3>Machine Building</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
          <p>For our week 10 machine building project, we created a sidewalk plotter. Our goal was to design a "light-painting" robot, a machine that could draw geometric shapes - specifically, a circle and a square - using an LED light. These designs would then be captured through long-exposure photography. Our robot was engineered to operate on a fixed XY axis with a predetermined width, incorporating motor position calibration and homing functionalities.</p>
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week10/Robot.png" alt="Website Image" />
          <img style={{ width: '30%', height: '30%' }} src="/PS70/week10/light.jpg" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
          <p>The construction process of our robot was influenced by an example demonstrated in class. We used Fusion360 files to craft the side and motor backing pieces from acrylic, and hand-cut metal extrusion for structural support. The assembly phase was intricate, requiring precise attachment of wheels to the metal extrusion and the careful spacing of components to ensure smooth movement. Notably, the end-effector, the heart of our robot's artistic capabilities, was crafted from a laser-cut acrylic stand housing an LED light bulb, fixed to the moving plate.
          </p>
        </div>
        <div className={styles.subcard2}>
          <p>The wiring and circuitry of the robot featured three stepper motors, A4988 Motor Drivers, an RGB LED, and a limit sensor for the Y-axis. These components were mounted and interconnected on breadboards, which were then secured to the robot's frame. We encountered challenges, such as defective motor drivers and fragile connections, which highlighted the intricacies of electronic component integration in mechanical projects.
Programming the robot was a pivotal aspect of this project. We relied on the AccelStepper class for motor control, initially considering the MultiStepper class, which we later abandoned due to responsiveness issues. The coding process involved a steep learning curve, particularly in understanding and applying the software documentation. Our code was designed to guide the robot in drawing the intended shapes, requiring precise adjustments in motor speed and acceleration.</p>
        </div>
        <div className={styles.subcard2}>
          <p>Throughout the project, we learned the importance of assembly sequence and calibration. The process was marked by trial and error, teaching us valuable lessons in mechanical design and problem-solving. Future iterations of this project could benefit from more stable wiring connections and an improved integration of electronic components to enhance the robot's performance.

</p>
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
