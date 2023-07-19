"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import logo from '../../assets/HSrY3.png'
import heroSection1 from '../../assets/heroSection1.png'
import heroSection2 from '../../assets/heroSection2.png'
import heroSection3 from '../../assets/heroSection3.png'
import MLE from '../../assets/MLE.svg'
import ROI from '../../assets/ROI.svg'
import Pricing from '../../assets/Pricing.svg'
import SOC from '../../assets/SOC.svg'
import OptRes from '../../assets/OptRes.svg'
import man_asset from '../../assets/man_asset.svg'
import Roady from '../../assets/Roady.svg'
import Traily from '../../assets/Traily.svg'
import WrENCHLY from '../../assets/WrENCHLY.svg'
import roady_main from '../../assets/roady_main.png'
import roady_sub from '../../assets/roady_sub.png'
import Traily_main from '../../assets/Traily_main.png'
import Traily_sub from '../../assets/Traily_sub.png'
import arrowRight from '../../assets/arrowRight.svg'
import linkArrow from '../../assets/linkArrow.svg'
import Link from 'next/link';
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'

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
          className={styles.emailInput}
        />
        <button type="submit" style={{ border: 'none' }}>
          Get started now
        </button>
      </div>
      {!validEmail && <p style={{ color: "red" }}>Please enter a valid email address.</p>}
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
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }} className={styles.intro}>
        <nav className={styles.nav}>
          <Image
            src={logo}
            alt="GFG logo served with static path of public directory"

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
      <div className={styles.box_cont}>
        <div className={styles.boxes}>
            <div className={styles.box}>
              <Image
                src={MLE}
              />
              <div className={styles.box_content}>
                <div className={styles.box_header}>Machine learning enabled</div>
                <p className={styles.box_desc}>
                  We have harnessed ML, predictive analytics, generative AI to enable you transition from reactive
                  maintenance to a proactive and datadriven approach.
                </p>
              </div>
          </div>
            <div className={styles.box}>
            <Image src={ROI} />
            <div className={styles.box_content}>
              <div className={styles.box_header}>Increased ROI</div>
              <p className={styles.box_desc}>
                Identify problematic assets sooner and make better repair versus replace decisions, all while
                reducing operations waste.
              </p>
            </div>
          </div>
            <div className={styles.box}>
              <Image
              src={Pricing}
              />
            <div className={styles.box_content}>
              <div className={styles.box_header}>Flexible Pricing</div>
              <p className={styles.box_desc}>
                Scale up your as your business needs evolve. You have full entitlement to the suite with the flexibility to chose and control your license capacity
                </p>
              </div>
          </div>
          
        
            <div className={styles.box}>
              <Image
                src={SOC}
              />
              <div className={styles.box_content}>
                <div className={styles.box_header}>Machine learning enabled</div>
                <p className={styles.box_desc}>
                  We have harnessed ML, predictive analytics, generative AI to enable you transition from reactive
                  maintenance to a proactive and datadriven approach.
                </p>
              </div>
          </div>
            <div className={styles.box}>
            <Image src={OptRes} />
            <div className={styles.box_content}>
              <div className={styles.box_header}>Increased ROI</div>
              <p className={styles.box_desc}>
                Identify problematic assets sooner and make better repair versus replace decisions, all while
                reducing operations waste.
              </p>
            </div>
          </div>
            <div className={styles.box}>
              <Image
              src={man_asset}
              />
            <div className={styles.box_content}>
              <div className={styles.box_header}>Flexible Pricing</div>
              <p className={styles.box_desc}>
                Scale up your as your business needs evolve. You have full entitlement to the suite with the flexibility to chose and control your license capacity
                </p>
              </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className={styles.solution}>
        <div className={styles.solution_header}>
          <label className={styles.solution_label}>Our Solutions</label>
          <h4 className={styles.solution_desc}>Transform your maintenance management.</h4>
        </div>
        <div className={styles.solution_feature}>
          <div className={styles.feature + " " + styles.feature1}>
            <div className={styles.feature_lft}>
              <Image src={Roady} />
              <h5 className={styles.feature_title}>Mobile asset management.</h5>
              <p className={styles.feature_desc}>Intelligence management and preventive maintenance application for any mobile asset. </p>
              <button className={styles.feature_btn}>
                <label>Learn More</label>
                <Image src={arrowRight} />
              </button>
            </div>
            <div className={styles.feature_rht}>
              <div className={styles.img_cont}>
                <Image src={roady_main} className={styles.img_main} />
                <Image src={roady_sub} className={styles.img_sub} />
              </div>
            </div>
          </div>
          <div className={styles.feature + " " + styles.feature2}>
            <div className={styles.feature_lft}>
              <Image src={Traily} />
              <h5 className={styles.feature_title}>Stationary asset management.</h5>
              <p className={styles.feature_desc}>Intelligence management and preventive maintenance application for any mobile asset.  </p>
              <button className={styles.feature_btn}>
                <label>Learn More</label>
                <Image src={arrowRight} />
              </button>
            </div>
            <div className={styles.feature_rht}>
              <div className={styles.img_cont + " " + styles.img_contRev}>
                <Image src={Traily_main} className={styles.img_main + " " + styles.img_mainReverse} />
                <Image src={Traily_sub} className={styles.img_sub + " " + styles.img_subReverse} />
              </div>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature_lft}>
              <Image src={WrENCHLY} />
              <h5 className={styles.feature_title}>Mobile asset management.</h5>
              <p className={styles.feature_desc}>Intelligence management and preventive maintenance application for any mobile asset. </p>
              <button className={styles.feature_btn}>
                <label>Learn More</label>
                <Image src={arrowRight} />
              </button>
            </div>
            <div className={styles.feature_rht}>
              <div className={styles.img_cont}>
                <Image src={roady_main} className={styles.img_main} />
                <Image src={Traily_sub} className={styles.img_sub} />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.blog}>
        <div className={styles.blog_content}>
          <h5 className={styles.blog_header}>Resources and articles: Hrsy blog</h5>
          <p className={styles.blog_desc}>Hrsy Blog serves as a knowledge center for current trends resources and articles related to us.</p>
        </div>
        <div className={styles.blog_bg}>
          <div className={styles.blog_card}>
            <h5 className={styles.blog_cardHeader}>How to build a great cultural maintenance system.</h5>
            <p className={styles.blog_cardDesc}>
              Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            </p>
            <div className={styles.blog_link}>
              <label className={styles.blog_linkLabel}>Read more</label>
              <Image src={linkArrow} />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <h6 className={styles.footer_title}>
            Ready to join the future of management?
          </h6>
          <div className={styles.footer_subContent}>
            <p className={styles.footer_desc}>
              Get hands on with the free trial today, or get in touch with our team to discuss your unique needs.
            </p>
            <div className={styles.footer_btnDiv}>
              <button className={styles.footer_btnPry}>
                Create a free acount
              </button>
              <button className={styles.footer_btnSec}>
                Talk to us
              </button>
            </div>
            
          </div>
          
        </div>
        <hr className={styles.footer_line}/>
        <div className={styles.footer_foot}>
            <ul className={styles.footer_link}>
              <li>
              <Link href={'#'}>
                Wrenchly
              </Link>
              </li>
              <li>
              <Link href={'#'}>
                Traily
              </Link>
              </li>
              <li>
              <Link href={'#'}>
                Foamy
              </Link>
              </li>
              <li>
              <Link href={'#'}>
                About Us
              </Link>
              </li>
              <li>
              <Link href={'#'}>
                Blog
              </Link>
              </li>
              <li>
              <Link href={'#'}>
                Contact Us
              </Link>
              </li>
            </ul>
        </div>
        <div className={styles.footer_socials}>
          <Image src={facebook}/>
          <Image src={linkedin}/>
          <Image src={instagram}/>
          <Image src={twitter}/>
        </div>
        <p className={styles.footer_copywrite}>© 2020 Hsry, Inc. All rights reserved.</p>
      </footer>
    </main>
  )
}
