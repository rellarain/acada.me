import { useState } from 'react'
import useWindowDimensions from './functionality/viewport';
import Console from './components/console';



function App() {




  // 


  // Viewport
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
    if (helperConsoleSize === "Min" && viewportWidth <= 800) {
      setHelperConsoleSize("Min");
    } else if (helperConsoleSize === "Min" && viewportWidth < 1200) {
      setHelperConsoleSize("Max");
    } else if (helperConsoleSize === "Min" && viewportWidth > 1200) {
      setHelperConsoleSize("Mid");
    } else if (helperConsoleSize === "Mid" && viewportWidth <= 800) {
      setHelperConsoleSize("Min");
    } else if (helperConsoleSize === "Mid" && viewportWidth < 1200) {
      setHelperConsoleSize("Min");
    } else if (helperConsoleSize === "Mid" && viewportWidth > 1200) {
      setHelperConsoleSize("Max");
    } else if (helperConsoleSize === "Max" && viewportWidth <= 800) {
      setHelperConsoleSize("Min");
    } else if (helperConsoleSize === "Max" && viewportWidth < 1200) {
      setHelperConsoleSize("Min");
    } else if (helperConsoleSize === "Max" && viewportWidth > 1200) {
      setHelperConsoleSize("Min");
    } else {setHelperConsoleSize("Min");}
  }


  // Social Navigation-------------- UNFINISHED!!!!!!!

  let districtSpec = "0000";
  let communitySpec = "0000";
  let userSpec = "00000";
  let regionID= "000";
  let districtID = regionID+"-"+districtSpec;
  let communityID = districtID+"-"+communitySpec;
  let userID = communityID+"-"+userSpec;


  const [socialSpaceCode,setSocialSpaceCode] = useState("");
  function handleSocialRegion() {
    if (socialSpaceCode !== "") {
      
    }
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
            <Console consoleTitle='Planner'/>
            <button className={'consoleClose'} onClick={handleUserDash}>X</button>
          </div>
          <div className={"userConsole dashConsole"}>
            Dashboard
            <button onClick={handleUserPlanner}>Planner</button>
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
            Social<br/>
            socialSpaceCode<br/>
            <button className={'consoleClose'} onClick={handleUserDash}>X</button>
          </div>
        </div>
        <div className={'serviceConsole assessmentConsole'}>
          <Console consoleTitle='Assessment'/>
          <button className={'consoleClose'} onClick={handleAssessConsole}>X</button>
        </div>
        <div className={'serviceConsole scholarConsole'}>
          <Console consoleTitle='Scholar'/>
          <button className={'consoleClose'} onClick={handleScholarConsole}>X</button>
        </div>
        <div className={'serviceConsole adminConsole'}>
          <Console consoleTitle='Admin'/>
          <button className={'consoleClose'} onClick={handleAdminConsole}>X</button>
        </div>
      </main>
      <header id='userHeader'>
        <img onClick={handleAccountState}/>
        <table className='workDay'></table>
        <div className='accountConsole'>
          <Console consoleTitle='Account'/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          height:     {viewportHeight}, {viewportRows}+ rows <br/>
          width:    {viewportWidth}, {viewportColumns}+ columns
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>{userID}
          <br/>
          <br/> Customization: theme, accent, alert, profile card, profile picture, thumbnail, header,
          <br/> Schedule: admin schedule (), user schedule (), assessment schedule (), scholar schedule ()
          <br/> Connections: 
          <br/> Portfolio: 
          <br/>
          <br/>
          <button className='consoleClose' onClick={handleAccountState}>x</button>
          

        </div>
        <div className={'socialButtons'}><button onClick={handleUserSocial}>{regionID}</button>-<button onClick={handleUserSocial}>{districtSpec}</button>-<button onClick={handleUserSocial}>{communitySpec}</button>-<button onClick={handleUserSocial}>{userSpec}</button></div>

      </header>
    </div>
  )
}

export default App
