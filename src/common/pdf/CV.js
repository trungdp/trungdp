import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import styled from 'styled-components'
import {Grid, Table} from "semantic-ui-react";
import AvatarSRC from "../../assets/images/trungdp.jpg";
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import AidaSRC from "../../assets/icons/aida.png";
import PTDLSRC from "../../assets/icons/ptdl.png";


// Create styles

const About = styled.div`
	flex: 3;
	height: 500px;
	position: relative;
	align-items: stretch;
	img{
		width: 100%;
		margin-bottom: 220px;
	}
	.name-content{
		position: absolute;
		top: 550px;
		left: 5%;
		width: 90%;
		height: 300px ;
		background-color: #2e2e2e;
		// box-shadow: 10px 10px 30px -10px rgba(128,121,128,1);
		h2,p{
			color: #fff;
			font-family: Courier Prime, monospace;
			font-size: 60px;
			padding: 50px 50px 0px 50px;
			margin: 0;
		}
		p{
			padding-top: 0;
			font-size: 40px;
			&.job{
				padding-top: 20px;
				text-align:center;
				font-size: 25px;
			}
		}
	}
`
const Resume = styled.div`
	flex: 7;
	display: block;
	background-color: #f2f2f2;
`
const Title = styled.h2`
	font-family: Courier Prime, monospace;
	margin: 20px auto 30px 50px !important;
	font-size: 45px;
`

const Cell = styled(Table.Cell)`
	font-size: 17px;
	font-family: Courier Prime, monospace;
	display: inline-block;
	padding: 30px 50px 40px 50px !important;
	margin-left: ${props=>props.marginLeft || '70px'};
	position: relative;
	p{
		font-size: 18px;
		padding-bottom: 15px;
		padding-top: 5px;
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
	padding: 7px 15px;
	margin-left: 20px;
	font-weight: 400;
	background-color: #f2f2f2;
	position: absolute;
	top: -19.5px;
	left: 10px;
`

const Column = styled(Grid.Column)`
	padding: 20px 20px 0 20px !important;
	
`

const CustomPage = styled(Page)`
	display: flex;
	background-color:lightgray;
	margin: 20px;
`

const List = styled.ul`
	li{
		padding: 3px 0;
		list-style-type: '- ';
	}
`

const Project = styled.div`
	display: block;
	padding: 0px 50px 20px 50px !important;
	margin-left: 20px;
	font-family: Courier Prime, monospace;
	vertical-align:middle;  
	img,vsg{
		width: 45px;
		height: 45px;
		display: inline-block;
		margin-right: 30px;
		background-color: lightgray;
		border-radius: 7px;
	}
	svg{
		fill: #2e2e2e
	}
	ul{
		display: inline-block;
		vertical-align: top;
		font-family: Courier Prime, monospace;
		font-size: 16px;
		li{
			list-style-type: none;
			&:first-child{
				font-size: 18px;
				font-weight: 600;
				padding: 5px 0;
			}
			span{
				font-weight: 400;
				font-size: 16px;
			}
		}
	}
`

const Social = styled.div`
	padding: 0px 50px 10px 50px !important;
	margin-left: 40px;
	font-family: Courier Prime, monospace;
	
	.item{
		height: 45px;
		display: flex;
		position: relative;
		margin-bottom: 15px;
		img,svg{
			width: 45px;
			height: 45px;
			display: inline-block;
			margin-right: 40px;
			border-radius: 7px;
		}
		svg{
			fill: #2e2e2e
		}
		p{
			font-size: 18px;
			position: relative;
			line-height: 50px;
			vertical-align: middle;
		}
	}
`

// Create Document Component
const CV = () => {

	return(
	<Document style={{padding: 0}}>
		<CustomPage >
			<Resume>
				<Grid style={{marginBottom:'50px'}}>
					<Column width={16}>
						<Title>Experience</Title>
						<Cell>
							<CellTitle>2019 - now</CellTitle>
							<p><b>Freelancer</b></p>
						</Cell>
						<Cell>
							<CellTitle>2017 - 2019</CellTitle>
							<p><b>iOS developer - Labian Labs</b></p>
							75 Tran Khanh Du, Da Lat, Vietnam
						</Cell>
					</Column>
					<Column width={16}>
						<Title>Education</Title>
						<Cell>
							<CellTitle>2016 - now</CellTitle>
							<p><b>Da Lat University</b></p>
							Information Technology - Software Engineer
						</Cell>
					</Column>
					<Column width={8}>
						<Title>Skills</Title>
						<Cell>
							<CellTitle><b>Mobile</b></CellTitle>
							<List>
								<li>iOS-Swift</li>
								<li>Cocoapod</li>
								<li>Simulator</li>
								<li>MVC|MVP|MVVM</li>
								<li>Android-Kotlin(newbie)</li>
							</List>
						</Cell>
						<Cell >
							<CellTitle><b>Frontend</b></CellTitle>
							<List>
								<li>HTML|CSS|SASS</li>
								<li>Javascript</li>
								<li>NodeJS-ejs</li>
								<li>ReactJS|Redux</li>
								<li>ASP.NET|C#</li>
								<li>Wordpress</li>
							</List>
						</Cell>
					</Column>
					<Column width={8} >
						<Title>&ensp;</Title>
						<Cell marginLeft={'30px'}>
							<CellTitle><b>Backend</b></CellTitle>
							<List>
								<li>NodeJS-Express</li>
								<li>ASP.NET</li>
								<li>RESTful API</li>
								<li>MSSQL Server|MySQL</li>
								<li>MongoDB</li>
								<li>JSON</li>
							</List>
						</Cell>
						<Cell marginLeft={'30px'}>
							<CellTitle><b>Other</b></CellTitle>
							<List>
								<li>Socket</li>
								<li>Git</li>
								<li>Design Pattern</li>
								<li>Agile|Scrum</li>
							</List>
						</Cell>
					</Column>
					<Column width={16}>
						<Title>Projects</Title>
						<Project>
							<img src={PTDLSRC}/>
							<ul>
								<li>Phòng trọ Đà Lạt</li>
								<li>iOS trainee</li>
							</ul>
						</Project>
						<Project>
							<img src={AidaSRC}/>
							<ul>
								<li>Aida English</li>
								<li>iOS developer</li>
							</ul>
						</Project>
						<Project>
							<img/>
							<ul>
								<li>Vdict-Từ điển Việt&emsp;<span>(on going)</span></li>
								<li>Frontend developer</li>
							</ul>
						</Project>
					</Column>
				</Grid>
			</Resume>
			<About>
				<img src={AvatarSRC}/>
				<div className={'name-content'}>
					<h2>Trung&emsp;{'</>'}</h2>
					<p>Dang Phuong</p>
					<p className={'job'}>Web|Mobile Developer</p>
				</div>

				<Title>Socials</Title>
				<Social>
					<div className={'item'}>
						<FaGithubSquare/>
						<p>github.com/trungdp</p>
					</div>
					<div className={'item'}>
						<FaLinkedin/>
						<p>trung-đặng-b352a21a1</p>
					</div>
					<div className={'item'}>
						<IoIosMail/>
						<p>trungtrs1998@gmail.com</p>
					</div>
					<div className={'item'}>
						<FaPhone/>
						<p>(+84)33 495 2304</p>
					</div>
				</Social>
				<Title>Contact</Title>
				<Social>
					<div className={'item'}>
						<IoIosMail/>
						<p>trungtrs1998@gmail.com</p>
					</div>
					<div className={'item'}>
						<FaPhone/>
						<p>(+84)33 495 2304</p>
					</div>
					<div className={'item'}>
						<MdLocationOn/>
						<p>72 Bui Thi Xuan, Da Lat</p>
					</div>
				</Social>
			</About>
		</CustomPage>
	</Document>)
};

export default CV;

