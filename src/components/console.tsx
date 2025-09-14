import { useState } from "react";
import useWindowDimensions from "../functionality/viewport";

interface Props {
    consoleTitle: string;
}





function Console({consoleTitle}:Props) {


    return (
        <div className={"serviceConsole "+consoleTitle+"Console"}>
            {consoleTitle}

        </div>
    )
}

export default Console;