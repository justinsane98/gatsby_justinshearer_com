import React, {Component } from "react";
import { motion} from 'framer-motion'
import data from '../data/data'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAziM8Dkq3BwvskKCnEI-OGU7z4SKYwLAo",
  authDomain: "justinshearerdotcom.firebaseapp.com",
  projectId: "justinshearerdotcom",
  storageBucket: "justinshearerdotcom.appspot.com",
  messagingSenderId: "897571319748",
  appId: "1:897571319748:web:6466e6e32fb2423650fe91",
  measurementId: "G-QD6CG8C72D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const duration = 0.5
const props = data.properties[1];
const item = {
  initial: {opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: duration*3
    },
  },
  exit: {
    opacity: 0,
  },
};

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "init",
    }
  }

  saveData = async () => {
    this.setState({
      status: "loading"
    })
    await addDoc(collection(db, "contacts"), {
      email: this.state.email,
      note: this.state.note,
      created: new Date(Date.now()).toLocaleString()
    }).then(() => {
      this.setState({
        status: "success"
      })
    });
  }
  updateNote = (note) => {
    this.setState({
      note: note
    })
  }

  updateEmail = (email) => {
    this.setState({
      email: email
    })
  }

  render() {
  
    return (

        <div>
        <div className="mb-2 text-white bg-pink-50">
            {this.state.status === "loading" && <p className="px-4 py-2">sending...</p>}
            {this.state.status === "success" && (
                <div
                className="px-4 py-2"
                >Thanks for the note! I'll reach out as soon as I'm done wrangling cats.</div>
            )}
        </div>

         <motion.div key={"textarea"} variants={item}>
            <textarea className="font-serif text-xs 425px:text-base 768px:text-lg p-2 w-full h-32 shadow-default border-pink-dark border-2 focus:outline-none focus:border-pink bg-white-75 focus:bg-white"
                    onChange={e => this.updateNote(e.target.value)} placeholder="How can I help you?"
            ></textarea>
          </motion.div>
          <motion.div key={"email"} variants={item}>
              <input onChange={e => this.updateEmail(e.target.value)} className="font-serif text-xs 425px:text-base 768px:text-lg  p-2 w-full shadow-default border-pink-dark border-2 focus:outline-none focus:border-pink bg-white-75 focus:bg-white" placeholder="What's your Email?"></input>
          </motion.div>
          <motion.div key={"send"} variants={item}>
              <button onClick={this.saveData} className="font-display text-white text-xs 425px:text-base 768px:text-lg font-thin uppercase bg-pink py-2 px-4 mt-2 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer scale-100 hover:scale-110 transition-bg transition-scale duration-200 ease-in-out">{props.cta}</button>
          </motion.div>

        </div>

)
}
}

export default Form