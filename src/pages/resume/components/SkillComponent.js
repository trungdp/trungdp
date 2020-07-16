import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Progress} from 'semantic-ui-react'
import {CircularProgressbarWithChildren} from "react-circular-progressbar";

SkillComponent.propTypes = {

};

const Section = styled.section`
	padding: 50px 100px !important;
	padding-bottom: 0 !important;
	:last-child{
		padding-bottom: 100px !important;
	}
`

const Title = styled.h2`
	font-family: Courier Prime, monospace;
	margin-bottom: 30px !important;
	font-size: 25px;
`

const Skill = styled.div`
	p{
		font-family: Courier Prime, monospace;
		font-size: 17px;
		margin-left: 20px;
		display: inline-block
	}
	.progress{
		margin-left: 50px !important;
	}
`

function SkillComponent(props) {
	return (
		<>
			<Section>
				<Title>Coding Skill</Title>
				<Skill>
					<p>iOS - Swift</p>
					<Progress size='small' indicating percent={80}/>
				</Skill>
				<Skill>
					<p>HTML - CSS</p>
					<Progress size='small' indicating percent={65}/>
				</Skill>
				<Skill>
					<p>NodeJS - Javascript - ReactJS</p>
					<Progress size='small' indicating percent={75}/>
				</Skill>
				<Skill>
					<p>ASP.NET - C#</p>
					<Progress size='small' indicating percent={65}/>
				</Skill>
				<Skill>
					<p>Wordpress - PHP</p>
					<Progress size='small' indicating percent={45}/>
				</Skill>
			</Section>
			<Section>
				<Title>Design Skill</Title>
				<Skill>
					<p>Web Design</p>
					<Progress size='small' color='black' indicating percent={70}/>
				</Skill>
				<Skill>
					<p>Experience</p>
					<Progress size='small' color='black' indicating percent={60}/>
				</Skill>
				<Skill>
					<p>Illustrations</p>
					<Progress size='small' color='black' indicating percent={65}/>
				</Skill>
				<Skill>
					<p>Photoshop</p>
					<Progress size='small' color='black' indicating percent={60}/>
				</Skill>
			</Section>
			<Section>
				<Title>Language Skill</Title>
				<Skill>
					<p>English</p>
					<Progress percent={65} color='black' progress/>
				</Skill>
			</Section>
		</>
	);
}

export default SkillComponent;