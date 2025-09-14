import { useState } from 'react'
import useWindowDimensions from './functionality/viewport';
import Console from './components/console';


function App() {

  const {viewportWidth, viewportHeight} = useWindowDimensions();
  let viewportColumns = Math.floor(viewportWidth / 400);
  let viewportRows = Math.floor(viewportHeight / 400);

  // Account Console Toggle
  const [accountConsoleState, setAccountConsoleState] = useState("Closed");
  function handleAccountState() {
    if (accountConsoleState === "Closed") {
      setAccountConsoleState("Open");
    } else {setAccountConsoleState("Closed");}
  }

  // User Consoles Toggle
  const [openUserConsole, setOpenUserConsole] = useState("Dash");
  function handleUserPlanner() {
    setOpenUserConsole("Planner");
  }
  function handleUserDash() {
    setOpenUserConsole("Dash");
  }
  function handleUserSocial() {
    setOpenUserConsole("Social");
  }

  // Service Consoles Toggle
  const [openServiceConsole, setOpenServiceConsole] = useState("");
  function handleAssessConsole() {
    if (openServiceConsole === "Assess") {
      setOpenServiceConsole("");
    } else {setOpenServiceConsole("Assess");}
  }
  function handleScholarConsole() {
    if (openServiceConsole === "Scholar") {
      setOpenServiceConsole("");
    } else {setOpenServiceConsole("Scholar");}
  }
  function handleAdminConsole() {
    if (openServiceConsole === "Admin") {
      setOpenServiceConsole("");
    } else {setOpenServiceConsole("Admin");}
  }
  function closeServiceConsoles() {
    setOpenServiceConsole("");
    setAccountConsoleState("Closed");
  }

  // Help Console Toggle
  const [helperConsoleState, setHelperConsoleState] = useState("Closed");
  function handleHelperConsoleState() {
    if (helperConsoleState === "Closed") {
      setHelperConsoleState("Open");
    } else {setHelperConsoleState("Closed");}
  }
  const [helperConsoleSize, setHelperConsoleSize] = useState("Min");
  function handleHelperConsoleSize() {
    if (helperConsoleSize === "Min") {
      setHelperConsoleSize("Mid");
    } else if (helperConsoleSize === "Mid") {
      setHelperConsoleSize("Max");
    } else {setHelperConsoleSize("Min");}
  }

  return (
    <div className={"interface accountConsole"+accountConsoleState+" userConsole"+openUserConsole+" openService"+openServiceConsole+" helper"+helperConsoleSize+helperConsoleState}>
      <aside>helper
        <button onClick={handleHelperConsoleState}>?</button>
        <button onClick={handleHelperConsoleSize}>{helperConsoleSize}</button>
      </aside>
      <main>
        <div className={"userConsoles"}>
          <div className={"userConsole plannerConsole"}>
            Planner
            <button onClick={handleUserDash}>X</button>
          </div>
          <div className={"userConsole dashConsole"}>
            Dash
            <button onClick={handleUserPlanner}>Planner</button>
            <button onClick={handleUserSocial}>Social</button>
            <button onClick={handleAssessConsole}>Assessment</button>
            <button onClick={handleScholarConsole}>Scholar</button>
            <button onClick={handleAdminConsole}>Admin</button>
            <button onClick={handleHelperConsoleState}>?</button>
            <br/>
            <br/>
            <br/>
            height:     {viewportHeight}, {viewportRows}+ rows <br/>
            width:    {viewportWidth}, {viewportColumns}+ columns
          </div>
          <div className={"userConsole socialConsole"}>
            Social
            <button onClick={handleUserDash}>X</button>
          </div>
        </div>
        <Console consoleTitle='assessment'/>
        <Console consoleTitle='scholar'/>
        <Console consoleTitle='admin'/>
      </main>
      <header id='userHeader'>
        <img onClick={handleAccountState}/>
        <table></table>
        <div className='accountConsole'>
          height:     {viewportHeight}, {viewportRows}+ rows <br/>
          width:    {viewportWidth}, {viewportColumns}+ columns
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> Customize Colors:
          <br/> Customize Schedule:
          

        </div>
        <button className='closeConsole' onClick={closeServiceConsoles}>Close {openServiceConsole}</button>

      </header>
    </div>
  )
}

export default App
