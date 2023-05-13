import React from 'react'
import './aboutcode.css'

const AboutCode = () => {
  return (
    <div className='p__about_code-section_codes'>
                <div className='horizontal-line-left'></div>
                <div id='import'>
                    <div data-code-line='01' className='p__about_code-section_codes-code'>
                        <p className='method'>import</p>
                        <p className='property'>java.time.LocalData <span className='code'> ;</span></p>      
                    </div>
                    <div data-code-line='02' className='p__about_code-section_codes-code'>
                        <p className='method'>import</p>
                        <p className='property'>java.util.ArrayList <span className='code'> ;</span></p>      
                    </div>
                </div>

                <div data-code-line='03' className='p__about_code-section_codes-code empty-line'/>

                <div data-code-line='04' className='p__about_code-section_codes-code'>
                    <p className='comment'>{'// Class about me and my past experience'}</p>  
                </div>

                <div data-code-line='05' className='p__about_code-section_codes-code empty-line'/>

                <div  id='class'>
                    <div data-code-line='06' className='p__about_code-section_codes-code'>
                        <p className='method'>public</p>
                        <p className='method'>class</p>
                        <p className='title'>Nikola Buzadzija<span className='curly-braces'>{' {'}</span></p> 
                    </div>

                    <div data-code-line='07' className='p__about_code-section_codes-code empty-line'/>
                    
                    <div className='p__about_code-section_codes-code_class'>

                        <div/>

                        <div id='instanceVariable'>

                            <div data-code-line='08' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · </span>private</p>
                                <p className='property'>String</p>
                                <p className='property'>name <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='09' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · </span>private</p>
                                <p className='property'>LocalDate</p>
                                <p className='property'>dateOfBirth <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='10' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · </span>private</p>
                                <p className='property'>String</p>
                                <p className='property'>email <span className='code'>;</span> </p> 
                            </div>

                        </div>

                        <div data-code-line='11' className='p__about_code-section_codes-code empty-line'/>

                        <div id='comment'>
                            <div data-code-line='12' className='p__about_code-section_codes-code'>
                            <p className='comment'><span className='dot'>· · · </span>{'// I am ambitious and I love new challenges.'}</p>   
                            </div>
                            <div data-code-line='13' className='p__about_code-section_codes-code'>
                                <p className='comment'><span className='dot'>· · · </span>{'// My vast variety of skills is continuosly expanding.'}</p>   
                            </div>
                        </div>

                        <div data-code-line='14' className='p__about_code-section_codes-code empty-line'/>

                        <div id='constructor'>
                            <div data-code-line='15' className='p__about_code-section_codes-code'>
                                <p className='method'><span className='dot'>· · · </span>public</p>
                                <p className='title'>Nikola Buzadžija( )</p>
                                <p className='curly-braces'>{' {'}</p>      
                            </div>
                            <div data-code-line='16' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · · · · </span><span className='scope'>this</span>.<span className='property'>name</span></p>
                                <p className='scope'>=</p>   
                                <p className='string'>" Nikola Buzadžija "<span className='code'> ;</span></p>   
                            </div>
                            <div data-code-line='17' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · · · · </span><span className='scope'>this</span>.<span className='property'>dateOfBirth</span></p>
                                <p className='scope'>=</p>   
                                <p className='string'><span className='scope'>LocalDate</span><span className='code'>.</span><span className='property'>of{'('}<span className='scope'>1995</span>, <span className='scope'>10</span>, <span className='scope'>28</span>{')'}</span><span className='code'> ;</span></p>   
                            </div>
                            <div data-code-line='18' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · · · · </span><span className='scope'>this</span>.<span className='property'>email</span></p>
                                <p className='scope'>=</p>   
                                <p className='string'>" buzadzija.nikola13@gmail.com "<span className='code'> ;</span></p>   
                            </div>
                            <div data-code-line='19' className='p__about_code-section_codes-code'>
                                <p className='method'><span className='dot'>· · · </span>{'}'}</p>  
                            </div>
                        </div>

                        <div data-code-line='20' className='p__about_code-section_codes-code empty-line'/>

                        <div id='workE'>
                            <div data-code-line='21' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · </span>public</p>
                                <p className='property'>{"ArrayList <"}<span className='code'>{"String"}</span>{">"}</p>
                                <p className='title'>workExperience( )</p>
                                <p className='curly-braces'>{' {'}</p>      
                            </div>
                            <div data-code-line='22' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · · · · </span><span className='property'>{"ArrayList <"}<span className='code'>{"String"}</span>{">"}</span></p>
                                <p className='property'>experience</p> 
                                <p className='scope'>=</p>
                                <p className='code'>new</p>
                                <p className='property'>{"ArrayList<>( ) "}<span className='code'>;</span> </p>
                            </div>
                            <div data-code-line='23' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>experience<span className='code'>.</span>{'add('}<span className='string'>{' " 2014-2023 : Air conditioning technician " '} </span>{') '} <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='24' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>experience<span className='code'>.</span>{'add('}<span className='string'>{' " 2018-2021 : Math tutor " '} </span>{') '} <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='25' className='p__about_code-section_codes-code'>
                                <p className='scope'><span className='dot'>· · · · · · </span>return</p> 
                                <p className='property'>experience <span className='code'>;</span></p>
                            </div>
                            <div data-code-line='26' className='p__about_code-section_codes-code'>
                            <p className='method'><span className='dot'>· · · </span>{'}'}</p>  
                            </div>
                        </div>

                        <div data-code-line='27' className='p__about_code-section_codes-code empty-line'/>

                        <div id='education'>                           
                            <div data-code-line='28' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · </span>public</p>
                                <p className='property'>{"ArrayList <"}<span className='code'>{"String"}</span>{">"}</p>
                                <p className='title'>education( )</p>
                                <p className='curly-braces'>{' {'}</p>      
                            </div>
                            <div data-code-line='29' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · · · · </span><span className='property'>{"ArrayList <"}<span className='code'>{"String"}</span>{">"}</span></p>
                                <p className='property'>education</p> 
                                <p className='scope'>=</p>
                                <p className='code'>new</p>
                                <p className='property'>{"ArrayList<>( ) "}<span className='code'>;</span> </p>
                            </div>
                            <div data-code-line='30' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>education<span className='code'>.</span>{'add('}<span className='string'>{' " 2021-2022 : Faculty of Pedagogy - Master\'s in Education " '} </span>{') '} <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='31' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>education<span className='code'>.</span>{'add('}<span className='string'>{' " 2017-2021 : Faculty of Pedagogy - Bachelor\'s in Education " '} </span>{') '} <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='32' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>education<span className='code'>.</span>{'add('}<span className='string'>{' " 2014-2016 : Faculty of Technical Sciences " '} </span>{') '} <span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='33' className='p__about_code-section_codes-code'>
                                <p className='scope'><span className='dot'>· · · · · · </span>return</p> 
                                <p className='property'>education <span className='code'>;</span></p>
                            </div>
                            <div data-code-line='34' className='p__about_code-section_codes-code'>
                            <p className='method'><span className='dot'>· · · </span>{'}'}</p>  
                            </div>
                        </div>

                        <div data-code-line='35' className='p__about_code-section_codes-code empty-line'/>

                        <div id='main'>
                            <div data-code-line='36' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · </span>public</p>
                                <p className='code'>static</p>
                                <p className='property'>void</p>
                                <p className='title'>{"main( "}<span className='code'>String[ ] args</span>{" )"}</p>
                                <p className='curly-braces'>{' {'}</p>      
                            </div>
                            <div data-code-line='37' className='p__about_code-section_codes-code'>
                                <p className='code'><span className='dot'>· · · · · · </span><span className='instance'>NikolaBuzadzija</span></p>
                                <p className='instance'>nb</p> 
                                <p className='scope'>=</p>
                                <p className='code'>new</p>
                                <p className='property'>{"NikolaBuzadzija( ) "}<span className='code'>;</span> </p>
                            </div>
                            <div data-code-line='38' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>System<span className='code'>.</span>out<span className='code'>.</span>{'println('}<span className='instance'>{' nb'}</span><span className='code'>.</span><span className='instance'>name</span> {' ) '}<span className='code'>;</span> </p> 
                            </div>
                            <div data-code-line='39' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>System<span className='code'>.</span>out<span className='code'>.</span>{'println('}<span className='instance'>{' nb'}</span><span className='code'>.</span><span className='instance'>dateOfBirth</span> {' ) '}<span className='code'>;</span> </p>
                            </div>
                            <div data-code-line='40' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>System<span className='code'>.</span>out<span className='code'>.</span>{'println('}<span className='instance'>{' nb'}</span><span className='code'>.</span><span className='instance'>email</span> {' ) '}<span className='code'>;</span> </p>
                            </div>
                            <div data-code-line='41' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>System<span className='code'>.</span>out<span className='code'>.</span>{'println('}<span className='instance'>{' nb'}</span><span className='code'>.</span><span className='instance'>workExperience( )</span> {' ) '}<span className='code'>;</span> </p>
                            </div>
                            <div data-code-line='42' className='p__about_code-section_codes-code'>
                                <p className='property'><span className='dot'>· · · · · · </span>System<span className='code'>.</span>out<span className='code'>.</span>{'println('}<span className='instance'>{' nb'}</span><span className='code'>.</span><span className='instance'>education( )</span> {' ) '}<span className='code'>;</span> </p>
                            </div>

                            <div data-code-line='43' className='p__about_code-section_codes-code'>
                            <p className='method'><span className='dot'>· · · </span>{'}'}</p>  
                            </div>
                        </div>

                        <div data-code-line='44' className='p__about_code-section_codes-code'>
                            <p className='method'>{'}'}</p>  
                        </div>
                    </div>



                </div>
                
            </div>
  )
}

export default AboutCode
