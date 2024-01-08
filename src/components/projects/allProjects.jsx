import React, { useState } from 'react';

import Project from "./project";

import INFO from "../../data/user";

import AllTags from "./allTags";

import "./styles/allProjects.css";

const AllProjects = () => {
	// ProjStateHooks()
	var [projState, setProjState] = useState("ALL");

	//this filters to the projects we want to see
	var showingProjects = INFO.projects.filter(function (currProject) {
		if (projState === "ALL" || currProject.tags.includes(projState)){
			return true
		} else {
			return false
		}
	  });

	return (
		<div>
			<div> <AllTags tags={INFO.INDIV_TAGS} setProjState = {setProjState}/> </div>
			<div className="all-projects-container">
				{showingProjects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							tags={project.tags}
							setProjState = {setProjState}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
