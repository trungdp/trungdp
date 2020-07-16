import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import CV from "../../../common/pdf/CV";
import savePdf from "../../../common/pdf/util";
import {PDFDownloadLink} from "@react-pdf/renderer";

DownloadResumeComponent.propTypes = {

};

const Content = styled.div`
	width: 50%;
	height: calc(100% - 60px);
	background-color: #f2f2f2;
	position: relative;
	margin: 0px 25% 0px 25%;
`

const Popup = styled.div`
	z-index: 3;
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	.background{
		background-color:#000;
		opacity: 0.5;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`

const Action = styled.div`
	position: absolute;
	display: flex;
	z-index:4;
	bottom: 0;
	left: 0;
	width: 50%;
	height: 60px;
	// background-color: lightgray;
	margin: 0px 25%;
	button{
		width: 35%;
		cursor: pointer;
		border: none;
		border-radius: 999px;
		background-color: darkgray;
		color: white;
		font-size:20px;
		font-family: Quicksand,sans-serif;
		opacity:0.9;
		outline:none;
		&:first-child{
			margin: 5px 5% 5px 10%;
		}
		&:last-child{
			margin: 5px 10% 5px 5%;
		}
		&.download{
			background-color: #2e2e2e;
		}
		&:hover{
			opacity: 1
		}
	}
`

const CVContent = styled.div`
	height: 100%;
	overflow-y:auto;
`

function DownloadResumeComponent(props) {
	return (
		<Popup >
			<div className={'background'}></div>
			<Content>
				<CVContent>
					<CV/>
				</CVContent>

			</Content>
			<Action>
				<button onClick={()=>props.close()}>Close</button>
				<button className={'download'} onClick={()=>savePdf(<CV/>, "my-document.pdf")}>Download</button>
				<PDFDownloadLink document={<CV />} fileName="output.pdf">
					{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}}
				</PDFDownloadLink>
			</Action>
		</Popup>
	);
}

export default DownloadResumeComponent;