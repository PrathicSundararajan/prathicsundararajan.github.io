import React from 'react';
import "./styles/project.css";
import "./styles/tags.css";


  
const Tag = (props) => {

	const { tag, setProjState } = props
	return (
		<React.Fragment>
			<div className="tag-text">
				{/* <button class="button2" onClick={()=>handleClick(tag)}>{tag}</button> */}
				<button className="button2" onClick={()=>{setProjState(tag)}}>
					{tag}
				</button>
			</div>
		</React.Fragment>
	);
};

export default Tag;