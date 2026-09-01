'use client';

import { useEffect, useState } from 'react';

const eyeStates = [
  '/eyes-center.svg',
  '/eyes.svg',
  '/eyes-right.svg',
  '/eyes-crossed.svg',
];

export function AnimatedEyes() {
  const [eyeIndex, setEyeIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timeoutId: number | undefined;

    eyeStates.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const scheduleNextLook = () => {
      timeoutId = window.setTimeout(
        () => {
          setEyeIndex((currentIndex) => {
            let nextIndex = Math.floor(Math.random() * eyeStates.length);

            if (nextIndex === currentIndex) {
              nextIndex = (nextIndex + 1) % eyeStates.length;
            }

            return nextIndex;
          });
          scheduleNextLook();
        },
        1800 + Math.random() * 2600,
      );
    };

    const updateMotionPreference = () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      if (reducedMotion.matches) {
        setEyeIndex(0);
      } else {
        scheduleNextLook();
      }
    };

    updateMotionPreference();
    reducedMotion.addEventListener('change', updateMotionPreference);

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      reducedMotion.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  return (
    <img
      className="eyes"
      src={eyeStates[eyeIndex]}
      alt=""
      aria-hidden="true"
    />
  );
}
