import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'; // Import ScrollTrigger from the correct path
import styles from './style.module.scss'; // Import your CSS module file

export default function VideoScrub() {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;

    const videoScrub = (video, vars) => {
      let once = (el, event, fn) => {
        let onceFn = function () {
          el.removeEventListener(event, onceFn);
          fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn);
        return onceFn;
      };

      let prepFunc = () => {
        video.play();
        video.pause();
      };

      let prep = () => once(document.documentElement, "touchstart", prepFunc);

      let src = video.currentSrc || video.src;

      let tween = gsap.fromTo(video, {currentTime: 0}, {
        paused: true,
        immediateRender: false,
        currentTime: video.duration || 1,
        ease: "none",
        ...vars
      });

      let resetTime = () => {
        tween.vars.currentTime = video.duration || 1;
        tween.invalidate();
      };

      prep();
      video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);

      return tween;
    };

    videoScrub(video, {
      scrollTrigger: {
        trigger: video,
        start: "center center",
        end: "+=600",
        markers: true,
        scrub: true,
        pin: true
      }
    });
  }, []);

  return (
    <div id={styles['page-container']}>
      <div className={styles['content']}></div>
      <div className={styles['video-container']}>
        <video
          ref={videoRef}
          id="video1"
          className={styles['video-scrub']}
          src="https://assets.codepen.io/39255/output_960.mp4"
          playsInline={true}
          webkitplaysinline={true}
          preload="metadata"
          muted="muted"
        />
      </div>
    </div>
  );
}
