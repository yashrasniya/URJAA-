import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import MainEvents from "../MainEvents/MainEvents";

const Hero = () => {
  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading} style={{ color: "white" }}>
            UURJA 2K24
          </h1>
          <br></br>

          <h4 className={classes.caption} style={{ fontWeight: "bold" }}>
             Techno,Cultural & Sports Fest
          </h4>

          <p className={classes.date}>March 29-31, 2024</p>
          <Link
            className={classes.anchorBtn}
            rel="noopener noreferrer"
            to="https://forms.gle/So9RxUsNnL9RcnVPA"           
          >
            <Button
              link="/events"
              label="Register Here"
              className={classes.btn}
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
