import React from "react";
import classes from "./EventCard.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Event = ({ eventData }) => {
  const { id, image, name } = eventData;

  return (
    <>
      <NavLink to={`/SportEvent`}>
        <div className={classes.card}>
          <div className={classes.card2}>
            {/* <h3 className={classes.event_name}>{name}</h3> */}
            <div className={classes.img_container}>
              <img
                className={classes.event_image}
                src={image}
                alt="eventImage"
              />
            </div>
            {/* <p className={classes.event_desc}>{description}</p> */}
            <div className={classes.view_more_btn}>
              <Button link={`/SportEvent ${id}`} label="View More" />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Event;
