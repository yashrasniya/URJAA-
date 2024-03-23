import React from "react";
import classes from "./EventCard.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Event = ({ eventData }) => {
  const { id, image, name } = eventData;
  let link=`https://forms.gle/So9RxUsNnL9RcnVPA`
  if (id=='Technical'){
    link='https://forms.gle/pfvaTru1s6L9HrGW6';
  }
  if (id=='Culture') {
    link='https://forms.gle/So9RxUsNnL9RcnVPA';
  }
  if(id=='Sport'){
    link='https://forms.gle/So9RxUsNnL9RcnVPA';
  }
  
  return (
    <>
      <NavLink to={link}>
        <div className={classes.card}>
          <div className={classes.card2}>
            {/* <h3 className={classes.event_name}>{mname}</h3> */}
            <div className={classes.img_container}>
              <img
                className={classes.event_image}
                src={image}
                alt="eventImage"
              />
            </div>
            {/* <p className={classes.event_desc}>{description}</p> */}
            <div className={classes.view_more_btn}>
              <Button link={link} label="Registartion" />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Event;
