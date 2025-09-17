import { useState, useEffect } from "react";
import useWindowDimensions from "../functionality/viewport";

interface Props {
    consoleTitle: string;
    helperSize: string;
    helperState: string;
}





function Console({consoleTitle, helperSize, helperState}:Props) {

    // Date Time
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const today = new Date();
    let dd = today.getDate();
    let day = String(dd);
    let dddd = weekday[today.getDay()];
    let mm = month[today.getMonth()];
    let yyyy = String(today.getFullYear());
    let hours = today.getHours() % 12;
    let minutes = String(today.getMinutes()).padStart(2,"0");

    let todayDate = dddd + ", " + mm + " " + day + ", " + yyyy + " ";
    let todayTime = hours + ":" + minutes;

    // Viewport
    const {viewportWidth, viewportHeight} = useWindowDimensions();
    let viewportColumns = Math.floor(viewportWidth / 400);
    let viewportRows = Math.floor(viewportHeight / 400);

    // Console Toggle Logic-------------------------------------------- UNFINISHED!!!!!!!
    let helperFullState: string = helperSize+helperState;
    const [consoleToggleState,setConsoleToggleState] = useState("Desk");
    
    // using viewport info, update the console state in the classname on resizing
    // 
    // 
    // 

    return (
        <div className={"console consoleOpen"+consoleToggleState+" "+viewportColumns+"c"+viewportRows+"r"}>
            <table className="consoleProgress"></table>
            <div className="consoleTitle">{consoleTitle}</div>
            <div className="consoleTime">{todayTime}</div>
            <div className="consoleDate">{todayDate}</div>
            <button className="consoleSidebarBtn">i</button>
            <button className="consoleHelpBtn">?</button>
            <div className="consoleTabs">ConsoleTabs</div>
            <div className="consoleFooter">{viewportColumns} x {viewportRows}</div>
            <div className="consoleSidebar">Sidebar {helperSize} {helperState}</div>
            <div className="consoleHelp">Help {helperSize} {helperState}</div>
            <div className="consoleDesk">Desk {helperSize} {helperState}</div>

        </div>
    )
}

export default Console;