import styled from "styled-components";
import React from "react";

export const IconComponent = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  fill: ${(props) => props.fill || "white"};
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
`;
export const Header3 = styled.h3`
  color: ${(props) => props.color || "white"};
  font-family: ${(props) => props.font || "Quicksand, sans-serif"};
  font-weight: ${(props) => props.weight || "500"};
`;
export const Link = styled.a``;
