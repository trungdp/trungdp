import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import BackgroundSRC from '../../../assets/images/bg_about.jpeg'
import ResumeSRC from '../../../assets/images/bg_vintage.jpg'

NavComponent.propTypes = {

};

const Navigation = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 80px;
	z-index: 1;
	background-color: #fff;
	:before{
		content:" ";
		background-image: url(${(props =>props.src || "")});
		background-attachment: fixed;
		position: absolute;
		opacity:0.2;
		top:0;
		left:0;
		right:0;
		bottom:0;
		width: 100%;
		z-index:-1;
	}
	
`

const List = styled.li`
	padding: 15px 30px;
	display: flex;
	justify-content: center
`
const ListItem = styled.a`
	margin: 10px 30px;
	padding-bottom: 7px;
	font-family: Cutive Mono,monospace;
	font-size: 18px;
	color: black;
	cursor: pointer;
	transition: all 0.4s;
	&:hover{
		color: black;
		transform:scale(1.2);
	}
	&.active{
		font-size: 22px;
		font-weight: 500;
		border-bottom: solid black 1px;
		&:hover{
			transform:scale(1);
		}
	}
`

function NavComponent(props) {
	let bgsrc;
	if(props.location.pathname === "/resume")
		bgsrc = ResumeSRC;
	else
		bgsrc = BackgroundSRC;

	return (
		<Navigation src={bgsrc}>
			<ul>
				<List>
					<ListItem className={ props.location.pathname === "/" ? " active" : ""}
					          onClick={()=>props.history.push('/')}>Home</ListItem>
					<ListItem className={ props.location.pathname === "/resume" ? " active" : ""}
					          onClick={()=>props.history.push('/resume')}>Resume</ListItem>
					<ListItem className={ props.location.pathname === "/portfolio" ? " active" : ""}
					          onClick={()=>props.history.push('/portfolio')}>Portfolio</ListItem>
					<ListItem className={ props.location.pathname === "/blog" ? " active" : ""}>Blog</ListItem>
					<ListItem className={ props.location.pathname === "/contact" ? " active" : ""}>Contact</ListItem>
				</List>
			</ul>
		</Navigation>
	);
}

export default withRouter(NavComponent);