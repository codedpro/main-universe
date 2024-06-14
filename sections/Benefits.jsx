'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { Benefitslists } from '../constants';
import { Benefitslist, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Benefits = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/Benefits.png"
          alt="get-started"
          className="w-[85%] h-[85%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What Are the Benefits? " />
        <TitleText title={<>What Are The Benefits of AI?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {Benefitslists.map((feature) => (
            <Benefitslist
              key={feature} {...feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Benefits;
