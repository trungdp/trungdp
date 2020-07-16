import React, {Component, useState} from "react";
import PropTypes from "prop-types";
import ExperienceComponent from "./ExperienceComponent";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  margin: 0px;
`;
const Content = styled.div`
  width: 100%;
  // min-height: 100vh;
  border-radius: 10px;
  font-family: Quicksand, sans-serif;
`;

const CustomContainer = styled.div`
  padding: 15px;
  margin: 10px;
  width: auto;
  background-color: #2962FF;
  border-radius: 7px;
`

function SectionComponent(props) {
  const [visible, setVisible] = useState('');
  const onClick = (collapse) => {
    setVisible(collapse);
  };

  return (
    <Wrapper>
      <Content>
        <CustomContainer >
          <SectionHeader name={'1'} collapse={visible === '1'} onClick={(name)=>onClick(name)}/>
        </CustomContainer>
        <CustomContainer >
          <SectionHeader name={'2'} collapse={visible === '2'} onClick={(name)=>onClick(name)}/>
        </CustomContainer>
        <CustomContainer >
          <SectionHeader name={'3'} collapse={visible === '3'} onClick={(name)=>onClick(name)}/>
        </CustomContainer>
      </Content>
    </Wrapper>
  );
}

SectionComponent.propTypes = {
  height: PropTypes.number.isRequired,
};

export default SectionComponent;
