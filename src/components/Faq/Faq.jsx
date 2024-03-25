import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is UURJA?",
    answer:
      "UURJA 2k24 is the one of biggest techno-cultural & sports event .",
  },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "The event will commence at 9 AM on March 29th and will continue until 6 PM on March 31st.",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore various events on the UURJA's website and register for the same",
  },
  {
    question: "Is there any entry fee for UURJA 2k24?",
    answer:
      "No, there is no entry fee to explore UURJA 2k24.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
