import React from "react";
import classes from "./EventCard.module.css";
import Cultural from '../../../assets/2.png'
import Technical from '../../../assets/1.png'
import Sports from '../../../assets/3.png'
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Event = ({ eventData }) => {
  const { id, image, name } = eventData;
  let link=`https://forms.gle/So9RxUsNnL9RcnVPA`
  let ilink=Cultural
  if (id=='Technical'){
    link='https://forms.gle/E1yjYN7uEUPSrqS27';
    ilink=Technical
  }
  if (id=='Cultural') {
    link='https://forms.gle/So9RxUsNnL9RcnVPA';
    ilink=Cultural;
  }
  if(id=='Sport'){
    link='https://forms.gle/So9RxUsNnL9RcnVPA';
    ilink=Sports;
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
                src={ilink}
                alt="eventImage"
              />
            </div>
            {/* <p className={classes.event_desc}>{description}</p> */}
            <div className={classes.view_more_btn}>
              <Button link={link} label="Registration" />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Event;
