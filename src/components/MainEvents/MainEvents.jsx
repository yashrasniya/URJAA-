import React, { useEffect } from "react";
import EventCard from "../common/neweventcard/EventCard";
import Event from "../common/EventCard/EventCard";
import Events from "../common/EventCard copy/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";
import EventCards from "../common/neweventcard/EventCard";

const MainEvents = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Events</h1>
        <div className={classes.main}>
          <div className={classes.events_container}>
            <h1 className={classes.sub_heading}>Technical Events</h1>
            <Event eventData={{ id:'Technical', image:'image', name:'Technical Events' }} />
          </div>
          <div className={classes.events_container}>
            <h1 className={classes.sub_heading}>Cultural Events</h1>
            <Event eventData={{ id:'Culture', image:'image', name:'Cultural Events' }}  />
          </div>
          <div className={classes.events_container}>
            <h1 className={classes.sub_heading}>Sports Events</h1>
            <Event   eventData={{ id:'Sport', image:'image', name:'Sport Events' }} />

          </div>
        </div>

      </div>
    </>
  );
};

export default MainEvents;
