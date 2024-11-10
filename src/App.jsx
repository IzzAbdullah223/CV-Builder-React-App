import React,{useState} from 'react'
import Sidebar from "./SideBar";
import InfoDisplay from "./InfoDisplay";


export default function App() {
  const[Name,setName] = useState("Izz Abdullah")
  const[Address,setAddress] = useState("UAE, Abu Dhabi")
  const [Phone,setPhone] = useState("+971 542549300")
  const [Email,setEmail] = useState("x3zoabdullah@gmail.com")
  const [Summary,setSummary] = useState("Aspiring Full Stack Developer with expertise in Java, React, and integration technologies.Also skilled in JavaScript and Python, demonstrating adaptability across various frameworks and platforms.")
  const[Skills,setSkills] = useState(["Frontend: React, HTML-CSS-Javascript","Backend: Java, Java EE, Python",
    "Database: MySQL","DevOps: Git, PowerShell"])
  const[Uni,setUni] = useState("Al Ain University ")
  const[Degree,setDegree] = useState("Bachelor's degree of Software Engineering")
  const[Completion,setCompletion] = useState("May 2026")
  const[Location,setLocation] = useState("Abu Dhabi, UAE")
  const[Result,setResult] = useState("GPA: 3.6/4")
  const [CompanyName,setCompanyName] = useState("Freelance")
  const [Role,setRole] = useState("Software Engineer")
  const [Period,setPeriod] = useState("Feb 2022-Present")
  const [EXLocation,setEXLocation] = useState("UAE,Abu DHhabi")
  const[Achievements,setAchievements] = useState(["Developed dynamic, responsive web applications using HTML, CSS, and JavaScript."
                                              ,"Built interactive user interfaces with React for optimized user experience."
                                              ,"Created back-end solutions with Java, ensuring functionality and scalability."])

  const[Projects,setProjects] = useState(["Weather App","CV Application","Resturant Page"])

  const[Languages,setLanguages] = useState(["Arabic","English"])

  const[Fluent,setFluent] = useState(["Native","Fluent"])


  return(
    <div className="Page">
      <Sidebar Name={Name} setName={setName} Phone={Phone} setPhone={setPhone}    
               Address={Address} setAddress={setAddress} Email={Email} setEmail={setEmail}
               Summary={Summary} setSummary={setSummary} Skills={Skills} setSkills={setSkills}
               Projects={Projects} setProjects={setProjects} Languages={Languages} setLanguages={setLanguages}
               Fluent={Fluent} setFluent={setFluent} Uni={Uni} setUni={setUni}
               Degree={Degree} setDegree={setDegree} Completion={Completion} setCompletion={setCompletion}
               Location={Location}  setLocation={setLocation} Result={Result} setResult={setResult}
               CompanyName={CompanyName} setCompanyName={setCompanyName} Role={Role} setRole={setRole}
               Period={Period} setPeriod={setPeriod} EXLocation={EXLocation} setEXLocation={setEXLocation}
               Achievements={Achievements} setAchievements={setAchievements}></Sidebar>

      <InfoDisplay  Name={Name} Phone={Phone}     
               Address={Address} Email={Email} 
               Summary={Summary}  Skills={Skills} 
               Projects={Projects} Languages={Languages}
               Fluent={Fluent} Uni={Uni}
               Degree={Degree} Compleltion={Completion}
               Location={Location} Result={Result}
               CompanyName={CompanyName}  Role={Role}  
               Period={Period}  EXLocation={EXLocation}
               Achievements={Achievements}  ></InfoDisplay>
    </div>
   

  );

   
}
