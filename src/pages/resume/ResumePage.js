import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AboutComponent from "./components/AboutComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import SkillComponent from "./components/SkillComponent";
import BackgroundSRC from '../../assets/images/bg_vintage.jpg'
import styled from "styled-components";
import KnowledgeComponent from "./components/KnowledgeComponent";
import Popup from "reactjs-popup";
import DownloadResumeComponent from "./components/DownloadResumeComponent";

ResumePage.propTypes = {

};

const Background = styled.div`
	background-image: url(${BackgroundSRC});
	background-repeat: 0;
  background-attachment: fixed;
	width: 100%;
	height: 100%;
	position: fixed;
	opacity: 0.2;
	top: 0;
`

function ResumePage(props) {
	const [isShowCV, setShowCV] = useState(true)

	const onClosePopup = () => {
		setShowCV(false)
	}
	const onOpenPopup = () => {
		setShowCV(true)
	}
	return (
		<div>
			<Background/>
			<AboutComponent download={()=>onOpenPopup()}/>
			<ExperienceComponent/>
			<KnowledgeComponent/>
			<SkillComponent/>
			{
				isShowCV ?
					<DownloadResumeComponent close={()=>onClosePopup()}/>
					: ""
			}
		</div>
	);
}

export default ResumePage;