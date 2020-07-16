import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {Grid, Popup, Segment, TransitionablePortal} from 'semantic-ui-react'
import AvatarSRC from "../../../assets/images/avatar.png";
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import copy from "copy-to-clipboard";


AboutComponent.propTypes = {

};

const Column = styled(Grid.Column)`
	min-height: 500px;
	padding: 40px !important;
	&:first-child{
		padding-right: 20px !important;
		padding-left: 100px !important;
	}
	&:last-child{
		padding-left: 20px !important;
		padding-right: 100px !important;
	}
`

const Title = styled.h2`
	font-family: Courier Prime, monospace;
	margin: 100px !important;
	margin-bottom: 30px !important;
	font-size: 25px;
`

const ImageWrapper = styled.div`
	display:block;
	img{
		display: inline-block;
		width: 100px;
		border-radius: 999px;
		margin-bottom: 20px;
	}
`

const Content = styled.div`
	p{
		font-size: 18px;
		font-family: Courier Prime, monospace;
	}
	
	button{
		background-color: #2e2e2e;
		border: none;
		color: #fff;
		padding: 10px 20px;
		margin-top: 20px;
		font-family: Quicksand, sans-serif;
		font-size: 20px;
		transition: all 0.3s;
		cursor: pointer;
		outline:none;
		border-top-right-radius: 999px;
		border-bottom-right-radius: 999px;
		border-bottom-left-radius: 999px;
		margin-top: 30px;
		opacity: 0.9;
		&:hover{
			opacity: 1;
		}
	}
`

const Info = styled.div`
	margin: 15px auto 30px auto;
	h3,p{
		font-family: Courier Prime, monospace;	
		margin: 5px 0;
		font-size: 20px;
	}
`

const Social = styled.div`
	display: flex;
	justify-content: center;
	svg{
		width: 50px;
		height: 50px;
		fill: #2e2e2e;
		transition: all 0.5s;
		&:hover{
			transform: scale(1.3);
			cursor: pointer
		}
	}
`

const Great = styled.div`
	display: block;
	div{
		display: inline-block;
		border: solid 1.5px #2e2e2e;
		padding: 3px 5px;
		border-radius: 5px;
		margin-right: 15px;
		margin-bottom: 15px;
		font-family: Courier Prime, monospace;
		font-size: 16px;
	}
`

const Can = styled.div`
	display: flex;
	justify-content: center;
	svg{
		
	}
`

const Text = styled.p`
  padding: 5px 20px 0px 20px;
  color: #fff;
  text-align: left;
  font-weight: 500;
  font-size: 19px;
`;

const CustomSegment = styled(Segment)`
  background-color: #2e2e2e !important;
  padding: 10px 20px;
  border-radius: 5px;
`;

const Link = styled.a`
  padding: 0 5px;
`;

const ToolTip = styled(Popup)`
  border: 1px solid #fff;
  padding: 1px 5px 1px 5px;
  margin: 5px;
  color: #000 !important;
  border-radius: 5px;
  font-size: 16px;
  font-family: Quicksand, sans-serif;
`;


function AboutComponent(props) {
	const [open, setOpen] = useState(false);
	const onCopy = (text) => {
		copy(text);
		setOpen(true);
		const timer = setTimeout(() => {
			setOpen(false);
		}, 1000);
		return () => clearTimeout(timer);
	};
	return (
		<>
			<Title>About me</Title>
			<Grid style={{margin:0}}>
				<Column computer={8} tablet={8} mobile={16}>
					<ImageWrapper>
						<img src={AvatarSRC}/>
					</ImageWrapper>
					<Info>
						<p>Name: Dang Phuong Trung | Sherwin</p>
						<p>Age: 22</p>
						<p>Job: Web|Mobile Developer</p>
						<p>Country: Viet Nam</p>
					</Info>
					<Social>
						<ToolTip
							content="Click to view site"
							position="bottom center"
							trigger={
								<Link href="https://www.linkedin.com/in/trung-%C4%91%E1%BA%B7ng-b352a21a1/" target="_blank">
									<FaLinkedin />
								</Link>
							}
						/>
						<ToolTip
							content="Click to view site"
							position="bottom center"
							trigger={
								<Link href="https://www.facebook.com/profile.php?id=100016035575833" target="_blank">
									<FaFacebookSquare />
								</Link>
							}
						/>
						<ToolTip
							content="Click to view site"
							position="bottom center"
							trigger={
								<Link href="https://github.com/trungdp" target="_blank">
									<FaGithubSquare />
								</Link>
							}
						/>
						<ToolTip
							content="Click to copy to clipboard"
							position="bottom center"
							trigger={
								<Link onClick={() => onCopy("trungtrs1998@gmail.com")}>
									<FaGooglePlusSquare />
								</Link>
							}
						/>
						<ToolTip
							content="Click to copy to clipboard"
							position="bottom center"
							trigger={
								<Link onClick={() => onCopy("live:trungtrs1998")}>
									<FaSkype />
								</Link>
							}
						/>
					</Social>
				</Column>
				<Column computer={8} tablet={8} mobile={16}>
					<Content>
						<p>
							Hi! I'm Đặng Phương Trung, but you can call me Sherwin, too. I'm a
							Software Engineer who is also a Web | Mobile Developer from Viet
							Nam.
							My experience has taught me that developing not only create
							software, but also make improve user experience!
						</p>
						<p>
							I love coding, special in develop iOS app or NodeJS.
							Also I am good at
						</p>


						<Great>
							<div>NodeJS</div>
							<div>ReactJS</div>
							<div>Swift</div>
							<div>C#</div>
							<div>ASP.NET</div>
							<div>HTML|CSS</div>
							<div>Javascript</div>
							<div>Wordpress</div>
							<div>PS6|XD|AI</div>
						</Great>
						<button onClick={()=>props.download()}>Download CV</button>
					</Content>
				</Column>
			</Grid>
			<TransitionablePortal open={open}>
				<CustomSegment
					style={{
						left: "50%",
						position: "fixed",
						top: "75%",
						zIndex: 1000,
					}}
				>
					<Text>Copied!</Text>
				</CustomSegment>
			</TransitionablePortal>
		</>
	);
}

export default AboutComponent;