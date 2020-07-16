import React from 'react';
import PropTypes from 'prop-types';
import {Grid,Table} from 'semantic-ui-react'
import styled from "styled-components";

ExperienceComponent.propTypes = {

};

const Title = styled.h2`
	font-family: Courier Prime, monospace;
	margin: 50px auto 40px 0 !important;
	font-size: 25px;
`

const Cell = styled(Table.Cell)`
	font-size: 15px;
	font-family: Courier Prime, monospace;
	display: inline-block;
	padding-top: 30px !important;
	padding-bottom: 40px !important;
	padding-left: 30px !important;
	position: relative;
	p{
		font-size: 17px;
		padding-bottom: 10px;
	}
	&:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    width: 50px;
    border: 1px solid black;
    border-right-width: 0;
    padding: 1px;
	}
	&:first-child{
		&:before{
			border-bottom-width: 0;
		}
	}
	&:last-child{
		padding-bottom: 20px !important;
		&:before{
			border-top-width: 0;
		}
	}
	&:nth-child( 2 ){
		padding-bottom: 20px !important;
		&:before{
			border: 1px solid black;
      border-right-width: 0;
		}
	}
`

const CellTitle = styled.h4`
	font-family: Courier Prime, monospace;
	font-size: 18px;
	display: inline-block;
	border: 1px solid rgba(46,46,46,1);
	padding: 5px 15px;
	margin-left: 20px;
	font-weight: 400;
	background-color: #fff;
	position: absolute;
	top: -17.5px;
	left: 10px;
`

const Column = styled(Grid.Column)`
	min-height: 600px;
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

function ExperienceComponent(props) {
	return (
		<>
			<Grid style={{margin:0}}>
				<Column computer={8} tablet={16} mobile={16}>
					<Title>Experience</Title>
						<Cell>
							<CellTitle>2019 - now</CellTitle>
							<p><b>Freelancer</b></p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae dolorem ducimus eligendi harum maxime nesciunt, nisi obcaecati possimus provident quis reiciendis voluptates! Accusantium, minima nobis. Labore officiis omnis pariatur?
						</Cell>
						<Cell>
							<CellTitle>2017 - 2019</CellTitle>
							<p><b>iOS developer - Labian Labs</b></p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae dolorem ducimus eligendi harum maxime nesciunt, nisi obcaecati possimus provident quis reiciendis voluptates! Accusantium, minima nobis. Labore officiis omnis pariatur?
						</Cell>
				</Column>
				<Column computer={8} tablet={16} mobile={16}>
					<Title>Education</Title>
					<Cell>
						<CellTitle>2016 - now</CellTitle>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae dolorem ducimus eligendi harum maxime nesciunt, nisi obcaecati possimus provident quis reiciendis voluptates! Accusantium, minima nobis. Labore officiis omnis pariatur?
					</Cell>
				</Column>
			</Grid>
		</>
	);
}

export default ExperienceComponent;