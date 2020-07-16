import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "semantic-ui-react";
import styled from "styled-components";
const Wrapper = styled.div`
  height: ${(props) => (props.collapse ? "0px" : "500px")};
  background-color: #ff8a65;
  margin: 0;
  transition: all 0.5s;
  // box-sizing: border-box
`;
const HeaderComponent = styled.div``;
function ExperienceComponent(props) {
  return <Wrapper collapse={props.collapse}>
    {/*<p>It ok</p>*/}
  </Wrapper>;
}

ExperienceComponent.propTypes = {};

export default ExperienceComponent;
