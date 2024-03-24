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

const SportEvent = ({data}) => {
  
console.log(data)
  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>{data.title}</h1>
        <div className={classes.main}>
          
            {eventsData.map((eventData, i) => {
              if (eventData.eventType == data.type) {
                return <Event eventData={eventData} key={i} />;
              }

            })}
            

        </div>

      </div>
    </>
  );
};

export default SportEvent;
