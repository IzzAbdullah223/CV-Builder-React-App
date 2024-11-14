
    import ArrowDown from './assets/Arrow.svg'
    import Trash from './assets/Trash.svg'
 

    function Sidebar(Props){

        
        function PersonalArrow(x,Arr){
            let Bottom = document.querySelector(`.${x}`)
            console.log(Bottom.style.display)
            Bottom.style.display=="flex"? Bottom.style.display="none":
                                        Bottom.style.display="flex"
                                        Bottom.style.flexDirection="column"
            document.querySelector(`.${Arr}`).classList.toggle("ArrowUp")
        }

    

        function NameChange(event){
        Props.setName(event.target.value)

        }


        
        function PhoneChange(event){
        Props.setPhone(event.target.value)
        
        }

        
        function AddressChange(event){
        Props.setAddress(event.target.value)
        
        }

        
        function EmailChange(event){
        Props.setEmail(event.target.value)
        
        }

        function SummaryChange(event){
            Props.setSummary(event.target.value)
            
            }
            

        function AddNewLanguage(){
            Props.setLanguages(l=>[...l,""])
            Props.setFluent(f=>[...f,""])
        }


        function AddNewProject(){
            Props.setProjects(p=>[...p,""])
        }

    
        function AddNewAchivement(){
            Props.setAchievements(a=>[...a,""])

        }

        function AddNewSkill(){
            Props.setSkills(s=>[...s,""])

        }


        function changeSkill(event,index){
            const newSkills=[...Props.Skills]
            newSkills[index]=event.target.value
            Props.setSkills(newSkills)
        }

        function changeProject(event,index){
            const newProjects=[...Props.Projects]
            newProjects[index]=event.target.value
            Props.setProjects(newProjects)
        }

        function changeAchievements(event,index){
            const newAchievements=[...Props.Achievements]
            newAchievements[index]=event.target.value
            Props.setAchievements(newAchievements)
        }
        
        function changeLanguage(event,index){
            const newLanguage=[...Props.Languages]
            newLanguage[index]=event.target.value
            Props.setLanguages(newLanguage)
        }

        function changeFluent(event,index){
            const newFluent=[...Props.Fluent]
            newFluent[index]=event.target.value
            Props.setFluent(newFluent)
        }
    

        
        function CompanyChange(event){
            Props.setCompanyName(event.target.value)
    
            }


        function RoleChange(event){
            Props.setRole(event.target.value)
        }

        function PeriodChange(event){
            Props.setPeriod(event.target.value)
        }

        function EXLocationChange(event){
            Props.setEXLocation(event.target.value)
        }

        function changeUni(event){
            Props.setUni(event.target.value)
        }

        function changeDegree(event){
            Props.setDegree(event.target.value)
        }

        function changeCompletion(event){
            Props.setCompletion(event.target.value)
        }

        function changeLocation(event){
            Props.setLocation(event.target.value)
        }

        function changeResult(event){
            Props.setResult(event.target.value)
        }


        function removeSkill(index){
            Props.setSkills(s=>s.filter((_,i)=>i!==index))
        }

        function removeProject(index){
            Props.setProjects(p=>p.filter((_,i)=>i!==index))
        }

        function removeAchievement(index){
            Props.setAchievements(a=>a.filter((_,i)=>i!==index))
        }

        return(
         
            <div className="Sidebar">
                <div className="Top">
                    <div className="BTNTopContainer">
                        <button>Reload</button>
                        <button>About</button>
                    </div>
                </div>

            <div className="Bottom">

            <div className="Personal">
                <div className="pTop">
                    <h3>Personal</h3>
                    <img onClick={()=>PersonalArrow("BTM0","Arr0")} className='Arrow Arr0' src={ArrowDown} width={"20px"}></img>
                </div>
                 <div className='pBottom BTM0'>
                    <h3>Name</h3>
                    <input type='text' value={Props.Name} onChange={NameChange}></input>
                 </div>
                 <div className='BlackLine'></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Contact</h3>
                        <img onClick={()=>PersonalArrow("BTM1","Arr1")} className='Arrow Arr1' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM1">
                        <h3>Address</h3>
                        <input type='text' value={Props.Address} onChange={AddressChange}></input>
                        <h3>Phone</h3>
                        <input type='text' value={Props.Phone} onChange={PhoneChange}></input>
                        <h3>Email</h3>
                        <input type='text' value={Props.Email} onChange={EmailChange}></input>
                    </div>
                    <div className="BlackLine"></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Summary</h3>
                        <img onClick={()=>PersonalArrow("BTM2","Arr2")} className='Arrow Arr2' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM2">
                        <textarea rows={6} onChange={SummaryChange}>{Props.Summary}</textarea>
                    </div>
                    <div className="BlackLine"></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Skills</h3>
                        <img onClick={()=>PersonalArrow("BTM3","Arr3")} className='Arrow Arr3' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM3">
                        <ul>
                       
                         
                        {Props.Skills.map((skill,index)=> <div className="SkillTrash">
                            <img src={Trash} width={"20px"} className='skillIMG' onClick={()=>removeSkill(index)} ></img>
                             <li key={index}><  textarea className='skillTest' onChange={(event)=>changeSkill(event,index)}>{skill}</textarea></li> </div> )}
                         
                        </ul>
                        <div className="BTNContainer"> 
                        <button className='SkillBTN' onClick={AddNewSkill}>+ New</button>
                        </div>
                    </div>  
                    <div className="BlackLine"></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Projects</h3>
                        <img onClick={()=>PersonalArrow("BTM7","Arr7")} className='Arrow Arr7' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM7">
                        <ul>
                        {Props.Projects.map((project,index)=><di className="ProjectTrash">
                            <img className='ProjectIMG' onClick={()=>removeProject(index)} src={Trash} width={"20px"}></img>
                            <li className='ProjectLI' key={index}><input type='text' value={`${project}`} onChange={(event)=>changeProject(event,index)}></input></li>
                            </di>)}
                        </ul>

                        <div className="BTNContainer"> 
                        <button className='SkillBTN' onClick={AddNewProject}>+New</button>
                        </div>
                    </div>
                        
                    <div className="BlackLine"></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Experience</h3>
                        <img onClick={()=>PersonalArrow("BTM4","Arr4")} className='Arrow Arr4' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM4">
                        <h3>Company:</h3>
                        <input type='text' value={Props.CompanyName} onChange={CompanyChange}></input>
                        <h3>Role:</h3>
                        <input type='text' value={Props.Role} onChange={RoleChange}></input>
                        <h3>Period:</h3>
                        <input type='text' value={Props.Period} onChange={PeriodChange}></input>
                        <h3>Location:</h3>
                        <input type='text' value={Props.EXLocation} onChange={EXLocationChange}></input>
                        <h4>Achievements:</h4>
                        {Props.Achievements.map((Achivement,index)=><div className='AchivTrash'>
                            <img src={Trash} className='AchivIMG' onClick={()=>removeAchievement(index)} width={"20px"}></img>
                            <textarea className='skillTest' key={index} onChange={(event)=>changeAchievements(event,index)}>{Achivement}</textarea> </div>)}
                        <div className="BTNContainer"> 
                        <button className='SkillBTN' onClick={AddNewAchivement}>+New</button>
                        </div>
                    </div>
                    <div className="BlackLine"></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Education</h3>
                        <img onClick={()=>PersonalArrow("BTM5","Arr5")} className='Arrow Arr5' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM5">
                    <h3>College/University</h3>
                        <textarea value={Props.Uni} onChange={changeUni}></textarea>
                        <h3>Degree</h3>
                        <input type='text' value={Props.Degree} onChange={changeDegree}></input>
                        <h3>Completion By:</h3>
                        <input type='text' value={Props.Completion} onChange={changeCompletion}></input>
                        <h3>Location: </h3>
                        <input type='text' value={Props.Location} onChange={changeLocation}></input>
                        <h3>Result:</h3>
                        <input value={Props.Result} onChange={changeResult}></input>
                    </div>
                    <div className="BlackLine"></div>
                </div>

                <div className="Personal">
                    <div className="pTop">
                        <h3>Languages</h3>
                        <img onClick={()=>PersonalArrow("BTM6","Arr6")} className='Arrow Arr6' src={ArrowDown} width={"20px"}></img>
                    </div>
                    <div className="pBottom BTM6">
                        <div className="LngTrashContainer">
                        <div className="TrashContainer">
                            {Props.Languages.map((index)=><img src={Trash} width={"20px"} ></img>)}
                        </div>
                        <div className="LContainer"> 
                        <div className="Left">
                            {Props.Languages.map((Language,index)=><input type='text' value={Language} key={index} onChange={(event)=>changeLanguage(event,index)}></input>)}
                        </div>
                        <div className="Right">
                            {Props.Fluent.map((fluent,index)=><input type='text'value={fluent} key={index} onChange={(event)=>changeFluent(event,index)}></input>)}
                        </div>
                    </div>
                    </div>
                    <div className="BTNContainer"> 
                        <button className='SkillBTN' onClick={AddNewLanguage}>+New</button>
                        </div>
                    </div>
                    
                    <div className="BlackLine"></div>
                </div>


                

            
            </div>
            
            </div>
       
        

        )
        }

export default Sidebar
