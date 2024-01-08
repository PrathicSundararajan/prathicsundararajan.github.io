import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import AllTags from "./allTags";

const Project = (props) => {
	const { logo, title, description, linkText, link, tags, setProjState } = props;
	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-header-container">
								<div className="project-logo"><img src={logo} alt="logo" /></div>
							<div className="project-title">{title}</div> 
						</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
				<div>
					<AllTags 
						tags = {tags}
						setProjState = {setProjState}					
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;