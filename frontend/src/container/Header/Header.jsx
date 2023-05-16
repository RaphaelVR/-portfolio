import React from 'react';
import { easeInOut, motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text' >
                Hello, I am
              </p>
              <h1 className='head_text'>
                Raphael
              </h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text' >
              Full Stack Web Developer
            </p>
            <p className='p-text' >
              in Ruby on Rails / React
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img
          src={images.profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          className="overlay_circle"
        />
      </motion.div>


      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.html, images.css, images.git, images.sql, images.javascript, images.node, images.react, images.sass, images.mongodb, images.ruby, images.tailwind, images.rails, images.api].map((circle, index) => (
          <div
            className='circle-cmp__flex'
            key={`circle${index}`}
          >
            <img
              src={circle}
              alt="circle"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Header, 'home'),
  'home',
);
