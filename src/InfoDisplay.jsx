
function InfoDisplay(Props){
    return(
         <div className="DisplayInfoContainer">
             <h1>Resume Builder</h1>
             <div className="CardContainer">
                <div className="CardTop">
                <h1>{Props.Name}</h1>
                 <div className="CardContactInfo">
                    <div>{`${Props.Address} |`}</div>
                    <div>{`${Props.Phone}  |`}</div> 
                    <div>{`${Props.Email}`}</div>
                 </div>
                 </div>
                <div className="BlackLine"></div>
                 <p>{Props.Summary}</p>
                 <div className="BlackLine"></div>
                 <div className="SkillsExperienceContainer">
                    <div className="SkillsContainer">
                        <h2>Skills</h2>
                        <ul className="SkillsUL">
                            {Props.Skills.map((skill)=><li>{skill}</li>)}
                        </ul>
                        <div className="BlackLine"></div>
                        <div className="EducationContainer">
                            <h2>Education</h2>
                            <div>{Props.Uni}</div>
                            <div>{Props.Degree}</div>
                            <div>{Props.Completion}</div>
                            <div>{Props.Location}</div>
                            <div>{Props.Result}</div>
                        </div>
                        <div className="BlackLine"></div>
                            <h3>Languages</h3>
                            <div className="LanguagesSidesContainer"> 
                            <ul>
                              {Props.Languages.map((language)=><li className="LanguageLI">{language}</li>)}
                            </ul>
                            <ul>
                                {Props.Fluent.map((fluent)=><li className="FluentLI">{fluent}</li>)}
                            </ul>
                            </div>
                    </div>
                    <div className="ExperienceContainer">
                        <div className="Experience"> 
                        <h2>Experience</h2>
                        <div> 
                        <h4>{`${Props.CompanyName} | `}<span className="Role">Software Engineer</span></h4>
                        <div className="PL">{`${Props.Period} | ${Props.EXLocation}`}</div>
                        <div>Achievements:</div>
                        <ul className="AchivDisplay">
                            {Props.Achievements.map((achievement)=><li>{achievement}</li>)}
                        </ul>
                        </div>
                        </div>
                        <div className="Projects"> 
                        <h2 className="h2project">Projects</h2>
                        <ul className="projectDisplay">
                            {Props.Projects.map((project)=><li>{project}</li>)}
                        </ul>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
    )
        
    
}

export default InfoDisplay