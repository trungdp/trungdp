import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Container, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { IconComponent } from "../../../common/CommonComponents";
import ExperienceComponent from "./ExperienceComponent";

const IconWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.collapse ? "500px" : "0px")};
  position: relative;
`;
const CustomIconComponent = styled(IconComponent)`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  fill: black;
  transition: all 0.7s;
  transform: scaleX(1.5) translate(-50%, -50%);
`;
const SectionTitle = styled.div`
  height: 100px;
  background-color: red
`;

function SectionHeader(props) {
  const [collapse,setCollapse] = useState(props.collapse)

  const onClick = ()=>{
    setCollapse(!collapse)
  }

  useEffect(()=>{
    setCollapse(props.collapse)
  },[props.collapse])

  return (
    <Container style={{margin:0,padding:0,width:'auto',transition: 'all 0.5s'}}>
      <SectionTitle onClick={()=>{props.onClick(props.name);onClick()}}>OK</SectionTitle>
      {/*<IconWrapper collapse={collapse}>*/}
      {/*  <CustomIconComponent component={<FaCaretDown />}></CustomIconComponent>*/}
      {/*</IconWrapper>*/}
      <ExperienceComponent collapse={!collapse}/>
    </Container>
  );
}

SectionHeader.defaultProps = {
  collapse: false,
};

SectionHeader.propTypes = {
  collapse: PropTypes.bool,
};

export default SectionHeader;
