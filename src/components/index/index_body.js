import './index_body.css';

import React, { useEffect } from 'react';
import Particles from 'react-particles-js';
import Typewriter from "typewriter-effect";
import ReactTypingEffect from 'react-typing-effect';

const Index_body = () =>{
	return(
		<React.Fragment>
			<div class="index_body">
				<Particles id="particles-js" 
    				params={{
    					particles: {
    						number: {
    							value: 80,
    							density:{
                  					enable: true,
                 		 			value_area: 800,
               					}	
	        				},
    						line_linked: {
            					shadow: {
            						enable: true,
            						color: "white",
            						blur: 5,
            					}
            				},
            				move:{
				                enable:true,
				                speed:2,
				                direction: "none",
				            }
            			},
            			interactivity: {
            				detect_on:"canvas",
            				events:{
	            				onhover: {
	            					enable: true,
	            					modes: "grab",
	            				},
	            				onclick:{
									enable: true,
									mode: "push",
								},

							},
							modes:{
								grab:{
									distance:200,
									line_linked:{
										opacity:1
									}
								},
								push:{
									particles_nb:4
								},
							}
            			}
					}} />

					<div class="text">

                    	<img src="/images/RaunakAnand.png" class="Raunak-Anand"/>
                    	<div class = "title-page-name">
                    		<ReactTypingEffect
        						text={["Raunak Anand", "रौनक आनंद", "ରୋନକ ଆନନ୍ଦ"]}
        						speed={(200)}
        						eraseSpeed={(100)}
        						typingDelay={(500)}
      						/>
						</div>
                    	<h2>Computer Science and Statistics at UC Davis</h2>
                    	<h2>Software Engineer Intern at MasterClass</h2>

                    	<div className="social-logos">
                    		<a href="https://www.linkedin.com/in/raunak-anand/" target="_blank"><img src="/images/linkedin.png" class="logos"/></a>
                    		<a href="https://github.com/raunak26" target="_blank"><img src="/images/github.png" class="logos"/></a>
                    		<a href="https://open.spotify.com/user/31dxduls3536yktvdp5baavgr5ca" target="_blank"><img src="/images/spotify.png" class="logos"/></a>
                    		<a href="mailto:anandraunak2000@gmail.com" target="_blank"><img src="/images/mail.png" class="logos"/></a>
                    		<a href="https://twitter.com/raunakanandsahu" target="_blank"><img src="/images/twitter.png" class="logos"/></a>
                    	</div>

                	</div>

					
			</div>
		</React.Fragment>
	);
}

export default Index_body;