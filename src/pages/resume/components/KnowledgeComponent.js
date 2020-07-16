import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

KnowledgeComponent.propTypes = {

};

const Title = styled.h2`
	font-family: Courier Prime, monospace;
	margin: 50px 100px !important;
	margin-bottom: 30px !important;
	font-size: 25px;
`

function KnowledgeComponent(props) {
	return (
		<>
			<Title>Knowledge</Title>
		</>
	);
}

export default KnowledgeComponent;