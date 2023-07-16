"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import logo from '../../assets/HSrY3.png'
import heroSection1 from '../../assets/heroSection1.png'
import heroSection2 from '../../assets/heroSection2.png'
import heroSection3 from '../../assets/heroSection3.png'


const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validEmail) {
      // Perform form submission logic here
      console.log('Email submitted:', email);
    } else {
      console.log('Please enter a valid email address.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup} style={{ border: '1px solid #FFF', display: 'inline-flex' }}>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        onBlur={validateEmail}
        style={{ border: 'none', padding: '8px' }}
        placeholder='Enter your email address'
      />
      <button type="submit" style={{ border: 'none'}}>
        Get started now
      </button>
      </div>
      {!validEmail && <p>Please enter a valid email address.</p>}
    </form>
  );
};

export default function Home() {

  const [backgroundImage, setBackgroundImage] = useState(heroSection1.src);
  const [backgroundCount, setBackgroundCount] = useState(0);
  const images = [heroSection1.src, heroSection2.src, heroSection3.src]; // Add the paths to your images here
  const transitionInterval = 5000; // Transition interval in milliseconds (5 seconds in this example)

  useEffect(() => {
    const interval = setInterval(changeBackgroundImage, transitionInterval);
    return () => clearInterval(interval);
  }, [backgroundCount]);

  const changeBackgroundImage = () => {
    const nextIndex = parseInt(`${backgroundCount === 2 ? 0 : backgroundCount + 1}`);
    setBackgroundCount(nextIndex);
    setBackgroundImage(images[nextIndex]);
  }; 

  useEffect(() => {
    setBackgroundImage(images[backgroundCount]);

    const fadeElement = document.getElementById('heroSection');
    if (fadeElement) {
      fadeElement.classList.add(styles.fadeIn);

      const timer = setTimeout(() => {
        fadeElement.classList.remove(styles.fadeIn);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [backgroundCount, images]);

  return (
    <main className={`${styles.main}`}>
      <div  style={{ 
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
      <nav className={styles.nav}>
        <Image 
          src={logo} 
          alt="GFG logo served with static path of public directory"
          height="80"
          width="142"
          />
        <div>
          <button className={styles.navItem}>About us</button>
          <button className={styles.navItem}>Contact us</button>
          <button className={styles.navButton}>Contact us</button>
        </div>
      </nav>
   
      <div 
        className={styles.heroSection} >
        <h1 id={styles.heroH1}>We are building the world’s best software for <span className={styles.h1Color}>asset</span> and <span className={styles.h1Color}>operations</span> management.</h1>
        <hr />
        <p>Hsry offers cloud-based ML-enabled MMS (Maintenance Management System) products. Our innovative solutions revolutionize maintenance management by leveraging artificial intelligence and cloud technology. </p>
        <div className={styles.emailField}>
          <EmailInput />
        </div>
      </div>
      </div>
      <div className={styles.box}>
      <div className={styles.framewrapper}>
        <div className={styles.frame}>
          <div className={styles.group}>
            <div className={styles.overlap}>
              <div className={styles.div}>
                <div className={styles.frame2}>
                  <img
                    className={styles.machinelearning}
                    alt="Machine learning"
                    src="machinelearning01svgrepocom1.svg"
                  />
                  <div className={styles.frame3}>
                    <div className={styles.textwrapper}>Machine learning enabled</div>
                    <p className={styles.p}>
                      We have harnessed ML, predictive analytics, generative AI to enable you transition from reactive
                      maintenance to a proactive and datadriven approach.
                    </p>
                  </div>
                </div>
                <div className={styles.frame4}>
                  <div className={styles.frame5}>
                    <div className={styles.textwrapper}>Increased ROI</div>
                    <p className={styles.p}>
                      Identify problematic assets sooner and make better repair versus replace decisions, all while
                      reducing operations waste.
                    </p>
                  </div>
                  <img className={styles.stockearnings} alt="Stock earnings" src="stockearningssvgrepocom1.svg" />
                </div>
                <div className={styles.frame2}>
                  <div className={styles.frame5}>
                    <div className={styles.textwrapper}>Flexible Pricing</div>
                    <p className={styles.p}>
                      Scale up your as your business needs evolve. You have full entitlement to the suite with the
                      flexibility to chose and control your license capacity
                    </p>
                  </div>
                  <img className={styles.cloudservices} alt="Cloud services" src="cloudservicespricingsvgrepocom1.svg" />
                </div>
              </div>
              <div className={styles.frame6}>
                <div className={styles.frame2}>
                  <div className={styles.frame3}>
                    <p className={styles.textwrapper2}>SOC 2 Type 2 compliance</p>
                    <p className={styles.p}>
                      Your data are secured with world class security measures so we can prevent your data from going
                      missing or falling into the wrong hands.
                    </p>
                  </div>
                  <img className={styles.img} alt="Security svgrepo com" src="securitysvgrepocom1.svg" />
                </div>
                <div className={styles.frame4}>
                  <div className={styles.frame5}>
                    <div className={styles.textwrapper}>Optimize resources</div>
                    <p className={styles.textwrapper3}>
                      Focus on the work that matters most and notify technicians of priority changes and new work orders
                      so your team can be agile and more effective.
                    </p>
                  </div>
                  <img className={styles.img} alt="Browser seo and web" src="browserseoandwebsvgrepocom1.svg" />
                </div>
                <div className={styles.frame4}>
                  <div className={styles.frame7}>
                    <div className={styles.textwrapper}>Manage and maintain assets</div>
                    <p className={styles.textwrapper3}>
                      Track all assets across your protfolio in one centralized place no matter where they are. Get
                      better visibility through out your organisation .
                    </p>
                  </div>
                  <img
                    className={styles.smartpackkernel}
                    alt="Smartpack kernel"
                    src="smartpackkernelmanagersvgrepocom1.svg"
                  />
                </div>
              </div>
              <div className={styles.overlapgroupwrapper}>
                <div className={styles.overlapgroup}>
                  <img className={styles.line} alt="Line" src="line2.svg" />
                  <img className={styles.line2} alt="Line" src="line3.svg" />
                  <img className={styles.line3} alt="Line" src="line4.svg" />
                </div>
              </div>
            </div>
          </div>
          <img className={styles.line4} alt="Line" src="line9.svg" />
          <img className={styles.line5} alt="Line" src="line10.svg" />
        </div>
      </div>
    </div>
    </main>
  )
}
