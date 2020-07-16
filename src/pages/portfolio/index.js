import React from 'react';
import PropTypes from 'prop-types';
import CV from "../../common/pdf/CV";
import styled from 'styled-components'
import ReactPDF from "@react-pdf/renderer";
import Popup from "reactjs-popup";

PortfolioPage.propTypes = {

};

const Wrapper = styled.div`
	margin-top: 100px;
`
// ReactPDF.render(<CV />, `${__dirname}/example.pdf`);

function PortfolioPage(props) {


	return (
		<>
			{/*<Wrapper>*/}
				<CV style={{margin: '100px'}}/>
			{/*</Wrapper>*/}
		</>
	);
}

export default PortfolioPage;