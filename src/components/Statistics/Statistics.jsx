import React, { useRef, useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { groupNumber } from '../../data';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './Statistics.module.css';

const Statistics = () => {
  // Create a ref for the theme-container2 element
  const themeContainer2Ref = useRef(null);
  const [isThemeContainer2Visible, setIsThemeContainer2Visible] = useState(false);

  // Function to handle intersection observer callback
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsThemeContainer2Visible(true);
    }
    else {
      setIsThemeContainer2Visible(false);
    }
  };

  // Initialize Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% of the element must be visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (themeContainer2Ref.current) {
      observer.observe(themeContainer2Ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview Statistics</span>
        <div className={`${css.cards} grey-container`}>
          <div>
            <div className={css.arrowIcon}>
              <BsArrowUpShort />
            </div>

            <div className={css.card}>
              <span>Water Depth</span><span>Water Depth Analysis</span>
            </div>
          </div>

          <div className={css.card}>
            <span>Water supply</span><span>{groupNumber(455)}</span>
          </div>

          <div className={css.card}>
            <span>Present supply</span><span>{groupNumber(370000)}</span>
          </div>

          <div className={css.card}>
            <span> Average Depth analysis</span><span> {groupNumber(2000)}</span>
          </div>
        </div>
        <StatisticsChart />
      </div>
      <div
        className={`${css.container} ${isThemeContainer2Visible ? 'animate' : ''} theme-container2`}
        ref={themeContainer2Ref}
      >
        <span className={css.title}>Current results </span>
        <div className={`${css.cards} grey-container`}>
          <div className={css.card}>
            <span>Digging can be done here:</span><span>Yes</span>
          </div>
          <div className={css.card}>
            <span>Digging Method should be used here:</span><span>Rotary Drilling</span>
          </div>
          <div className={css.card}>
            <span></span><span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
