import { useState } from "react";
import useWindowDimensions from "../functionality/viewport";

interface Props {
    consoleTitle: string;
}





function Console({consoleTitle}:Props) {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const today = new Date();
    let dd = today.getDate();
    let day = String(dd);
    let dddd = weekday[today.getDay()];
    let mm = month[today.getMonth()];
    let yyyy = String(today.getFullYear());
    let hours = today.getHours();
    let minutes = String(today.getMinutes()).padStart(2,"0");

    let todayDate = dddd + ", " + mm + " " + day + ", " + yyyy + " ";
    let todayTime = hours + ":" + minutes;


    return (
        <div className={"console"}>
            <table className="consoleProgress"></table>
            <div className="consoleTitle">{consoleTitle}</div>
            <div className="consoleTime">{todayTime}</div>
            <div className="consoleDate">{todayDate}</div>

        </div>
    )
}

export default Console;