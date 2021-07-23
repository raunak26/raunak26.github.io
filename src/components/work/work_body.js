import './work_body.css';

import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';

import WorkOne from './workOne';
import WorkTwo from './workTwo';
import WorkThree from './workThree';
import WorkFour from './workFour';
import WorkFive from './workFive';
import WorkSix from './workSix';
import WorkSeven from './workSeven';

const Work_body = () =>{
	const [showResults1, setShowResults1] = React.useState(false)
  	const onClick1 = () => setShowResults1(true)
	const [isOpen1,setIsOpen1] = useState(false)

	const [showResults2, setShowResults2] = React.useState(false)
  	const onClick2 = () => setShowResults1(true)
	const [isOpen2,setIsOpen2] = useState(false)

	const [showResults3, setShowResults3] = React.useState(false)
  	const onClick3 = () => setShowResults3(true)
	const [isOpen3,setIsOpen3] = useState(false)

	const [showResults4, setShowResults4] = React.useState(false)
  	const onClick4 = () => setShowResults1(true)
	const [isOpen4,setIsOpen4] = useState(false)

	const [showResults5, setShowResults5] = React.useState(false)
  	const onClick5 = () => setShowResults5(true)
	const [isOpen5,setIsOpen5] = useState(false)

	const [showResults6, setShowResults6] = React.useState(false)
  	const onClick6 = () => setShowResults6(true)
	const [isOpen6,setIsOpen6] = useState(false)

	const [showResults7, setShowResults7] = React.useState(false)
  	const onClick7 = () => setShowResults1(true)
	const [isOpen7,setIsOpen7] = useState(false)

	return(
		<React.Fragment>
			<div class="aboutMe_body">
				<h1>Work Experience</h1>
				<div class="work_experience">
					<button onClick={() => setIsOpen1(true)} class="block">
							<img src="/images/masterclass.svg"/>
							<div class="block_content">
								<h3>MasterClass</h3>
								<h4>Software Engineer, Back End Intern</h4>
							</div>
					</button>
					<WorkOne open ={isOpen1} onClose = {() => setIsOpen1(false)}></WorkOne>
					
					<button onClick={() => setIsOpen2(true)} class="block">
						<img src="/images/include.png" class="include"/>
						<div class="block_content">
							<h3>#include at UC Davis</h3>
							<h4>Director of Technology - Front End</h4>
						</div>
					</button>
					<WorkTwo open ={isOpen2} onClose = {() => setIsOpen2(false)}></WorkTwo>

					<button onClick={() => setIsOpen3(true)} class="block">
						<img src="/images/womenindata.png" class="wid"/>
						<div class="block_content">
							<h3>Women in Data at UC Davis</h3>
							<h4>Technical Workshops Lead</h4>
						</div>
					</button>
					<WorkThree open ={isOpen3} onClose = {() => setIsOpen3(false)}></WorkThree>

					<button onClick={() => setIsOpen4(true)} class="block sachacks">
						<img src="/images/sachacks.png"/>
						<div class="block_content sachacks-content">
							<h3>SacHacks</h3>
							<h4>Lead Web Developer</h4>
						</div>
					</button>
					<WorkFour open ={isOpen4} onClose = {() => setIsOpen4(false)}></WorkFour>

					<button onClick={() => setIsOpen5(true)} class="block sachacks">
						<img src="/images/its.png"/>
						<div class="block_content">
							<h3>Institute of Transportation Studies</h3>
							<h4>IT Service Desk Analyst</h4>
						</div>
					</button>
					<WorkFive open ={isOpen5} onClose = {() => setIsOpen5(false)}></WorkFive>

					<button onClick={() => setIsOpen6(true)} class="block">
						<img src="/images/airtel.png"/>
						<div class="block_content">
							<h3>Bharti Airtel</h3>
							<h4>Software Engineering Intern</h4>
						</div>
					</button>
					<WorkSix open ={isOpen6} onClose = {() => setIsOpen6(false)}></WorkSix>

					<button onClick={() => setIsOpen7(true)} class="block">
						<img src="/images/renewbuy.png"/>
						<div class="block_content sachacks-content">
							<h3>RenewBuy</h3>
							<h4>Data Analyst Intern</h4>
						</div>
					</button>
					<WorkSeven open ={isOpen7} onClose = {() => setIsOpen7(false)}></WorkSeven>

				</div>
			</div>
		</React.Fragment>
	);
}

export default Work_body;