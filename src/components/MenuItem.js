import React, { Fragment } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.5

const item = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
     transition: {
      duration: duration
    },
  },
  exit: {
    opacity: 0,
  },
};

const MenuItem = ({to, className, children}) => (
  <Fragment>
    <AnimatePresence>
        <li 
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className={"menu-item text-white-90 text-lg 425px:text-xl font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-white hover:pl-1 " + (window.location.pathname == to ? "font-bold" : "font-normal") + " " + className }
        >
          <TransitionLink to={to} enter={{ length: duration }} exit={{ length: duration }} className="">
            {children}
          </TransitionLink>
        </li>
      </AnimatePresence>
  </Fragment>
);

export default MenuItem;