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
            <h3>2D Design & Cutting</h3>
          </div>
        </div>
        <div className={styles.subcard1}>
          <p>This week was a crazy one! My computer malfunctioned on Friday, and after an extended visit to the Apple store and securing a temporary replacement, I found myself having to recreate all my Rhino models. Initially, the prospect seemed overwhelming, but redoing them turned out to be a blessing in disguise. The repetition helped me solidify my grasp on various command names and their applications. In the end, this unexpected setback had its advantages, and I now feel much more confident using Rhino!</p>
          </div>
          <div className={styles.subcard2}>
            <p> 
              I started practicing my caliper and Rhino skills by measuring and modelling two objects in my apartment. First, I measured my Swell water bottle which had a height of 263.906mm and a diameter of 71.120m.  I modelled this shape by drawing the outer curve (the profile shape) using the <b>Curve</b> tool and then turned the curve into a surface using the <b>Revolve</b> tool.
              I then measured my favorite pink mug which had a bottom diameter of 70.00mm and a top diameter of 90.00mm. I began by making the body of the mug using the revolve curve (in a similar process as above). I made the handle by using the <b>Rail 1 sweep</b> command which allowed me to have the size of the handle change from bigger to smaller.
            </p>
            <img style={{ width: '20%', height: '20%' }} src="/PS70/bottle.png" alt="Website Image" />
            <img style={{ width: '25%', height: '25%' }} src="/PS70/cup.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
            <p>
              I also worked through two Rhino (and Grasshopper) tutorials.
            </p>
            <p>
              I went through this this <a href = 'https://www.youtube.com/watch?v=dqXsvvLOFvQ'> Press fit tooth-and-slot box tutorial</a>. First, I created the main square and added the squares on top that I intended to remove. I used the <b>CurveBoolean</b> command to isolate the desired section. Next, I employed the <b>MoveCurve</b> command to compensate for the machine's kerf. Finally, I extruded the curve on each side using the <b>ExtrudeCurve</b> command to render each aspect in 3D, allowing me to visualize the full box. I then used the laser cutter to cut out the box!
            </p>  
              <img style={{ width: '50%', height: '50%' }} src="/PS70/box.png" alt="Website Image" />
              <img style={{ width: '20%', height: '20%' }} src="/PS70/box_real.png" alt="Website Image" />

            <p>
              I then proceeded to work through Nathan's <a href = 'https://www.youtube.com/watch?v=mZ_1jC2FrnY&t=235s'> Intro to Grasshopper</a> video. After sketching a notch in Rhino and opening Grasshopper, the real fun began. Once inside Grasshopper, I referenced the notch curve from Rhino with the <b>Curve&rarr;Set one curve</b> command. To create a box around the notch, I employed <b>BoundingBox</b> and then further dissected the result using <b>Deconstruct Brep</b>. To pinpoint a specific position on the surface, I made use of <b>Evaluate Surface</b> after reparameterizing it, and then visualized the point using the <b>Panel</b> command with curly braces notation.
              For the rectangle, I began with the <b>Rectangle</b> command in Rhino. To define its domain in both the X and Y directions, I used <b>ConstructDomain</b> and adjusted the dimensions with the <b>Number sliders</b>. Breaking down the rectangle's components was achieved using <b>Explode</b>. To establish frames along the rectangle, I turned to the <b>HorizontalFrame</b> command after reparameterizing and adjusted its orientation with a slider. The frames were then rotated using <b>Rotate planes</b> with a pi/2 rotation value.
              Finally, to incorporate the notch into the rectangle, I used the <b>Orient</b> command, specifying the geometry, initial plane, and final plane. To subtract the notch shape from the rectangle, the <b>RegionDifference</b> command was employed. I then arranged the notched rectangles in a grid layout using <b>Rectangular array</b> and finalized my design in Rhino with the <b>Bake</b> function. I then repeated these instructions to make a circle with notches cut out. I laser cut both of these files and put the circular and rectangular pieces together.
              The width of the carboard was about 4mm but I had to make the notches 3mm to account for the kerf of the laser cutter. The first time I printed my box, the notches fit together too loosely. After some adjustements, I cut the shapes out again, and the notches fit together perfectly!
            </p> 
            <img style={{ width: '50%', height: '50%' }} src="/PS70/param_box.png" alt="Website Image" />
            <img style={{ width: '30%', height: '30%' }} src="/PS70/param_box_real.png" alt="Website Image" />
        </div>
        <div className={styles.subcard2}>
          <p>
            Lastly, I crafted my own unique press-fit shapes! One of the reasons I appreciate working in Rhino is its simplicity in creating organic forms. For this segment of the assignment, I sketched my own base shape using the Curve command. After adding notches to my design, I proceeded to cut it out with the laser cutter. I'm really fond of the final design! It had a sense of fun and whimsy, which was precisely my intent. It also resembles a group of animals feeding, which I really enjoy!
          </p>    
          <img style={{ width: '50%', height: '50%' }} src="/PS70/shapes.png" alt="Website Image" />   
        </div>
        <div className={styles.subcard2}>
          <p>TODO</p>
          <img style={{ width: '50%', height: '50%' }} src="/PS70/topology.png" alt="Website Image" />   
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
