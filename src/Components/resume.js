import React, { Component } from 'react'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import { Grid, Cell } from 'react-mdl'

class resume extends Component {
    render() {
        return (
            <div>
              <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://www.shareicon.net/data/512x512/2015/09/14/101207_man_512x512.png"
                            alt="avatar"
                            style={{height:"200px"}}  />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Jayesh Ukalkar</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <h5>Address</h5>
                        <p>"NAMOKAR", Kabra Nagar, Ringroad Nanded-431603</p>
                        <h5>Phone</h5>
                        <p>+91-9822885082</p>
                        <h5>Email</h5>
                        <p>jayeshukalkar@gmail.com</p>
                        <h5>Web</h5>
                        <p>jd_blog.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />

                    </Cell>



                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            qual="Secondary School Certificate [SSC]"
                            startYear="2014"
                            endYear="2015"
                            schoolName="Nagarjuna Public School, Nanded"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s."
                        />

                        <Education 
                            qual="Higher Secondary Certificate [HSC]"
                            startYear="2015"
                            endYear="2017"
                            schoolName="Shivaji Junior College, Hudco, Nanded"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s."
                        />

                        <Education 
                            qual="Bachelor of Technology [B.Tech]"
                            startYear="2017"
                            endYear="2021"
                            schoolName="Mahatma Gandhi Mission's College of Engineering, Nanded"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s."
                        />

                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience 
                            startYear="2022"
                            endYear="2025"
                            company="Infosys"
                            post="Senior Programmer"
                            jobDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                        />
                        <Experience 
                            startYear="2025"
                            endYear="2030"
                            company="Capegemini"
                            post="System Administrator"
                            jobDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                        />
                        <Experience 
                            startYear="2030 and Today"
                            company="Google"
                            post="Chief Executive Officer (CEO)"
                            jobDescription="The Job post says it all."
                        />

                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2>Skills </h2>

                        <Skills skill="C" perfection={80}/>
                        <Skills skill="C++" perfection={75}/>
                        <Skills skill="HTML and CSS" perfection={60}/>
                        <Skills skill="JS" perfection={95}/>
                        <Skills skill="Python" perfection={80}/>
                        <Skills skill="R" perfection={50}/>
                    </Cell>
                </Grid>  
            </div>
        )
    }
}

export default resume
