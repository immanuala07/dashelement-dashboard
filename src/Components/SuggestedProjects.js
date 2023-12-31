import React from "react";
import SuggestedProjectsCard from "./SuggestedProjectCard";

import classes from "./SuggestedProjects.module.css";
import arrow from "../Images/right-arrow.png";

import { SuggestedProjectsArray } from "../Constants";

const SuggestedProjects = (props) => {

	return (
		<div className={classes.projects}>
			<div className={classes.heading}>
				<p className={classes['heading-title']}>Suggested Projects</p>
				<div className={classes.anchor}>
					<a className={classes['heading-anchor']} href="#idx">view all projects</a>
					<img className={classes['heading-arrow']} src={arrow} alt="arrow" />
				</div>
			</div>
			<ul className={classes.cards}>
				<SuggestedProjectsCard projects={SuggestedProjectsArray} />
			</ul>
		</div>
	);
};

export default React.memo(SuggestedProjects);
