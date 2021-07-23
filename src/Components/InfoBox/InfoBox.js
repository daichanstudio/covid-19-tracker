import React from 'react';
import './InfoBox.css';
import {Card, CardContent, Typography} from '@material-ui/core';


function InfoBox({ title, total, cases, isRed, isOrange, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} ${isOrange && "infoBox--orange"}`}
    >
      <CardContent>
    
        <Typography className="infoBox__title">{title}</Typography>

        <h2 className={`infoBox__cases ${isRed && "infoBox__cases--red"} ${isOrange && "infoBox__cases--orange"}`}>{cases}</h2>

        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;