import styles from './style.module.scss'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Danger() {

  const firstText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const firstText2 = useRef(null);
  const slider2 = useRef(null);
  let xPercent2 = 100;
  let direction2 = 1;

  const textContent = "CAUTION: EXTREME CUTENESS AHEAD / ";
  const textContentRepeated = textContent.repeat(200); // Adjust the number of repetitions as needed

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
//        onUpdate: e => direction = e.direction * -1
      },
      x: "0px",
    });

    gsap.to(slider2.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
//        onUpdate: e => direction2 = e.direction * -1
      },
      x: "0px",
    });

    requestAnimationFrame(animate);
    requestAnimationFrame(animate2);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.06 * direction;
  }

  const animate2 = () => {
    if (xPercent2 < -100) {
      xPercent2 = 0;
    } else if (xPercent2 > 0) {
      xPercent2 = -100;
    }
    gsap.set(firstText2.current, { xPercent: xPercent2 })
    requestAnimationFrame(animate2);
    xPercent2 += 0.06 * direction2;
  }

  return (
    <main className={`pt-4 py-32 ${styles['main']}`}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText} className={styles.text}>{textContentRepeated}</p>
        </div>
        <div ref={slider2} className={styles.slider2}>
          <p ref={firstText2}>{textContentRepeated}</p>
        </div>
      </div>
    </main>
  );
}
