import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./bd.png"
								alt="becton dickinson"
								className="work-image"
							/>
							<div className="work-title">Becton Dickinson</div>
							<div className="work-subtitle">
								Software Engineer II 
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./ace.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">ACE Analytics</div>
							<div className="work-subtitle">
								Co-Founder
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./venavitals.png"	
								alt="venavitals"
								className="work-image"
							/>
							<div className="work-title">Vena Vitals</div>
							<div className="work-subtitle">
								Software Engineer/Data Scientist (Contract)
							</div>
							<div className="work-duration">2022</div>
						</div>

						<div className="work">
							<img
								src="./ew.png"
								alt="edwards"
								className="work-image"
							/>
							<div className="work-title">Edwards Lifesciences</div>
							<div className="work-subtitle">
								R&D/Manufacturing Co-op 
							</div>
							<div className="work-duration">2021</div>
						</div>					
					</div>
				}
			/>
		</div>
	);
};

export default Works;
