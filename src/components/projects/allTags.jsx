import React from "react";
import Tag from "./tag";

import "./styles/AllTags.css";


const AllTags = (props) => {
	const { tags, setProjState } = props;
	return (
			<div className="all-tags">
				{tags.map((currTag) => (
				<div className="indiv-tags-pad" key={currTag}>
					<div className="indiv-tags">
						<Tag
							tag={currTag}
							setProjState = {setProjState}						
						/>
					</div>
				</div>

				))}
			</div>
	);
};

export default AllTags;
