import React from "react"
import Layout from "../components/Layout"
import TransitionLink from "gatsby-plugin-transition-link";
import { motion, AnimatePresence } from 'framer-motion'
import problem from "../videos/snail.mp4"
import solution from "../videos/fast.mp4"
import hand from "../images/hand-square-invoices.png"
import logo from "../images/logo-square-brand.png"
import helaine from "../images/invoices-helaine.jpg"


const duration = 0.5

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  initial: { height: "100%", opacity: 0 },
  enter: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: duration*3
    },
  },
  exit: {
    opacity: 0,
    height: "0"
  },
};

const fromLeft = {
  initial: { height: "100%", opacity: 0, left:"10px" },
  enter: {
    opacity: 1,
    height: "100%",
    left: "0",
    transition: {
      delay: duration*3,
      duration: duration
    },
  },
  exit: {
    left: "10px",
    opacity: 0,
    height: "0"
  },
};

const Invoices = () => (
  <>
    <Layout>
    <AnimatePresence>
      <motion.section  variants={container} key="hero" className="text-white font-serif relative  bg-gradient-to-br from-indigo-light to-indigo">
          <div className="px-4 425px:px-8 768px:px-12 1024px:mx-auto 1200px:max-w-7xl flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-32 768px:pt-0">
              <motion.h1 style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }} key="hero-heading" variants={item} className="font-display text-7xl 375px:text-8xl 1024px:text-10xl mb-4 text-white leading-none">Square
                <br/> <span className="text-white-50">Invoices</span>
              </motion.h1>
              <motion.div variants={item} key="hero-p">
                <p style={{textShadow: "rgba(0, 0, 0, 0.05) 2px 2px"}} 
                  className="text-white text-base font-normal 768px:text-lg font-serif leading-8 z-10 mb-8 pr-4 max-w-md">
                  From the first brainstorming sessions to launching in multiple international markets, I propelled the UX design, front-end development and soul of the product across multiple platforms and devices. 
                </p>
              </motion.div>
              <motion.div key="hero-cta" variants={item}>
                <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-indigo-dark py-2 px-4 inline-block shadow-default border-indigo border-2 text-white focus:bg-indigo-light active:bg-indigo-light hover:bg-indigo hover:text-white hover:cursor-pointer mb-4  scale-100 hover:scale-110 transition-bg transition-scale duration-200 ease-in-out">Circle Back</TransitionLink>
              </motion.div>
            </div>
            <motion.div variants={fromLeft} key="hero-image" className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 1024px:pt-12">
              <img className="object-cover 768px:object-contain object-bottom 768px:min-h-screen" alt="hero" src={hand}/>
            </motion.div>
          </div>
        </motion.section>

        <motion.div variants={container} key="problem" className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              className="object-cover object-center h-full w-full"
            >
              <source
                src={problem}
                type="video/mp4"
              />
          </video>
          </div>
          <motion.div  key={"problem-content"}  className="py-32 768px:min-h-screen flex flex-col justify-center relative z-10 text-center">
            <motion.div key={"heading-1"} variants={item}>
              <h2
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
                className={"heading text-5xl 425px:text-6xl 768px:text-7xl my-2 768px:mt-0 768px:mb-0 inline-block font-thin font-display text-white leading-tight drop-shadow leading-tight"}>
                Slow Ride<br/> <span className="opacity-50 text-3xl relative -top-4">- Foghat</span></h2>
            </motion.div>
           
            
          </motion.div>
        </motion.div>


<section key="solution-details" className="text-gray-600 font-serif px-4 425px:px-8 768px:px-12  bg-white bg-gradient-to-br from-indigo-25 to-indigo-75">
  <div className="container py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="1024px:w-1/3 1024px:py-6 mx-auto">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-25 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-gray-900 mb-1 text-xl">Lost in the Mail</h2>
            <p className="leading-relaxed max-w-md opacity-90">Traditional invoices are slow and costly to create and send and even slower to recieve.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-25 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold  text-gray-900 mb-1 text-xl">Recurring Nightmares</h2>
            <p className="leading-relaxed max-w-md opacity-90">Send the same invoices to the same customers every week. Either merchants write down customer's payment information or they enter it every time.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-25 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-xl text-gray-900 mb-1">Bleeding edge</h2>
            <p className="leading-relaxed max-w-md opacity-90">Early architecture investments into Ember.js led to growing pains when integrating the Invoices product into the shared ecosystem.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-25 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold mb-1 text-xl">Too Square</h2>
            <p className="leading-relaxed max-w-md opacity-90">Due to competing internal projects at times I was entrusted to be the sole person in the company actively working on Invoices. </p>
          </div>
        </div>
      </div>
      <div className="1024px:w-2/3 1024px:mt-0 mt-12 1024px:pl-12 flex flex-col justify-center">
        <div>
          <img src={helaine} alt="step" className="rounded-lg object-cover"/>
        </div>
      </div>   
    </div>
  </div>
</section>
<motion.div variants={container} key="solution" className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              className="object-cover object-center h-full w-full"
            >
              <source
                src={solution}
                type="video/mp4"
              />
          </video>
          </div>
          <motion.div  key={"problem-content"}  className="py-32 768px:min-h-screen flex flex-col justify-center relative z-10 text-center">
            <motion.div key={"heading-1"} variants={item}>
              <h2
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
                className={"heading text-5xl 425px:text-6xl 768px:text-7xl my-2 768px:mt-0 768px:mb-0 inline-block font-thin font-display text-white leading-tight drop-shadow leading-tight"}>
                Harder Better<br/> Faster<br/> <span className="opacity-50 text-3xl relative -top-4">- Daft Punk</span></h2>
            </motion.div>
           
            
          </motion.div>
        </motion.div>



  <section key="how" className="text-gray-600 font-serif bg-gradient-to-br from-indigo-light via-indigo to-indigo">
  <div className="container px-5 py-24 mx-auto 1024px:w-2/3 1200px:w-1/2 1600px:w-1/3 flex flex-wrap ">
    <div className="flex relative pt-10 pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-indigo-dark pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-dark text-white relative z-10  font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Wagon Wheel <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Old Crow Medicine Show</span></h2>
          <p className="leading-relaxed opacity-90">Part of a larger ecosystem I got to design and implement instances of customers, cards, items, signatures, etc...  building a better invoicing product faster.</p>
        </div>
      </div>
    </div>
    
    <div className="flex relative pb-20 sm:items-center mx-auto  group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-indigo-dark pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-dark text-white relative z-10 font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Regulate <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Warren G</span></h2>
          <p className="leading-relaxed opacity-90">Simplifiying local, state and federal taxes is almost as oddly satisfying as sorting out international timezones.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-indigo-dark pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-dark text-white relative z-10  font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Push It <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Salt-N-Pepa</span></h2>
          <p className="leading-relaxed opacity-90">Once the basics were covered, I got to work on innovative features like reoccurance, reminders, estimates and tips so people get paid more... faster.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center  mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-indigo-dark pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-dark text-white relative z-10  font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Sweet Child O' Mine <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Guns N' Roses</span></h2>
          <p className="leading-relaxed opacity-90">Numerous patents awarded, billions of dollars paid, millions of happy users but she will always be my sweet summer child.</p>
        </div>
      </div>
    </div>
  </div>
</section>



          <motion.div variants={container} key="branding" className="font-serif relative bg-black bg-gradient-to-br from-indigo-10 via-black to-indigo-10 768px:min-h-screen flex flex-col justify-center ">
          <motion.div  key={"branding-content"} className="py-32 text-center px-auto text-white">
              
              <div className="container px-5 py-24 mx-auto 1024px:w-1/2">
                <img src={logo} alt="Square" className="w-full max-w-md inline-block mb-12"/>
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">200<span className="opacity-75 text-2xl">M</span></h2>
                    <p className="leading-relaxed">Invoices Sent</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">45<span className="opacity-75 text-2xl">B</span></h2>
                    <p className="leading-relaxed">Dollars Paid</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">70<span className="opacity-75 text-2xl">M</span></h2>
                    <p className="leading-relaxed">Payers</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">75<span className="opacity-75 text-2xl">%</span></h2>
                    <p className="leading-relaxed">Paid within a day</p>
                  </div>
                </div>
              </div>
          </motion.div>
          </motion.div>




          <section className="text-gray-600 font-serif px-4 425px:px-8 768px:px-12 bg-black bg-gradient-to-br from-indigo-50 to-indigo-25 text-white">
  <div className="container flex flex-wrap px-5 py-24 items-center mx-auto">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-black-25">
      <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">What I learned</h1>
      <p className="leading-relaxed text-base opacity-75">Dates and taxes have more edge cases than a corner factory. Invoices and receipts are suprisingly similar but it's all in the timing. Slow and steady might win the race but it does not get you paid.</p>
      <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="mt-4 font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-indigo-dark py-2 px-4 inline-block shadow-default border-indigo border-2 text-white focus:bg-indigo active:bg-indigo-light hover:bg-indigo hover:text-white hover:cursor-pointer mb-4  scale-100 hover:scale-110 transition-bg transition-scale duration-200 ease-in-out">Grow With Me</TransitionLink>
              
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="font-bold text-gray-900 mb-3 text-xl text-gray-800">Technologies Used</h2>
      <nav className="flex flex-wrap list-none -mb-1 opacity-75">
      <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://www.sketch.com/">Sketch</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://balsamiq.com/">Balsamiq</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://html.spec.whatwg.org/multipage/">HTML</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://java.com.com/">Java</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://yaml.org/" className="hover:underline">YAML</a>/<a href="https://haml.info/" className="hover:underline">HAML</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://www.json.org/json-en.html" className="hover:underline">JSON</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://www.w3.org/Style/CSS/Overview.en.html" className="hover:underline">CSS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://sass-lang.com/" className="hover:underline">SASS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:underline">Javascript</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://emberjs.com/" className="hover:underline">Ember.js</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://nodejs.org/" className="hover:underline">Node.js</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://gruntjs.com/" className="hover:underline">Grunt</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://analytics.google.com" className="hover:underline">Google Analytics</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://developers.google.com/maps/" className="hover:underline">Google Maps API</a>
        </li>
      </nav>
    </div>
  </div>
</section>


   </AnimatePresence>     
    </Layout>
</>
)
export default Invoices