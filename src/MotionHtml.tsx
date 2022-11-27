import { HTMLMotionProps, motion } from 'framer-motion';
import { useWillChange } from 'framer-motion';
import React from 'react';

import { DynamicIslandSize } from '../types';

type Props = HTMLMotionProps<'div'> & {
  before: DynamicIslandSize;
  size: DynamicIslandSize;
};

const stiffness = 400;
const damping = 30;

const MotionDiv = (props: Props) => {
  const willChange = useWillChange();
  return (
    <motion.div
      {...props}
      initial={{
        opacity: props.size === props.before ? 1 : 0,
        scale: props.size === props.before ? 1 : 0.9,
      }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.9 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0 }}
      style={{ willChange }}
    >
      {props.children}
    </motion.div>
  );
};

const MotionH2 = (props: Props) => {
  const willChange = useWillChange();
  return (
    <motion.h2
      className={props.className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.9 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      style={{ willChange }}
    >
      {props.children}
    </motion.h2>
  );
};

const MotionP = (props: Props) => {
  const willChange = useWillChange();
  return (
    <motion.p
      className={props.className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: props.size === props.before ? 0 : 1,
        scale: props.size === props.before ? 0.9 : 1,
        transition: { type: 'spring', stiffness: stiffness, damping: damping },
      }}
      style={{ willChange }}
    >
      {props.children}
    </motion.p>
  );
};

export { MotionDiv, MotionH2, MotionP };
