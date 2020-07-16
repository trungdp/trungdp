import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AvatarSRC from "../../../assets/images/avatar.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IconComponent } from "../../../common/CommonComponents";
import {
  Popup,
  TransitionablePortal,
  Segment,
  Header,
} from "semantic-ui-react";
import copy from "copy-to-clipboard";

const ContentWrapper = styled.div`
  padding: 0px;
  padding-left: 0px;
  position: sticky
`;
const Content = styled.div`
  background-color: #2962FF;
  width: 100%;
  min-height: 100vh;
  // height: 100%;
  font-family: Quicksand, sans-serif;
  display: block;
`;
const AvatarWrapper = styled.div`
  width: 100%;
  height: 270px;
  position: relative;
`;
const AvatarBorder = styled.div`
  width: 210px;
  height: 270px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 200px;
  border: 20px solid rgba(255, 255, 255, 0.5);
  transform: translate(-50%, calc(-50% + 30px));
  position: absolute;
  left: 50%;
  top: 50%;
`;
const Wrapper = styled.div`
  padding-top: 20px;
  margin: 0 50px 0px 50px;
`;
const SectionHeader = styled.h3`
  padding: 15px 15px 5px 15px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
`;

const NameText = styled.h3`
  padding: 5px 15px 0px 15px;
  color: #fff;
  text-align: center;
  font-size: ${(props) => (props.name === "name" ? "24px" : "18px")};
  font-weight: ${(props) => (props.name === "name" ? "700" : "500")};
`;
const Text = styled.p`
  padding: 5px 20px 0px 20px;
  color: #fff;
  text-align: left;
  font-weight: 500;
  font-size: 19px;
`;
const IconWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
const Link = styled.a`
  padding: 0 5px;
`;
const CustomIconComponent = styled(IconComponent)`
  width: 50px;
  height: 50px;
  transition: all 0.7s;
  :hover {
    transform: scale(1.4);
  }
`;
const ToolTip = styled(Popup)`
  border: 1px solid #fff;
  padding: 2px 5px 2px 5px;
  margin: 5px;
  color: #2962FF !important;
  border-radius: 5px;
  font-size: 15px;
  background-color: #fefefe;
`;

const CustomSegment = styled(Segment)`
  background-color: #2962FF !important;
  padding: 10px 20px;
  border-radius: 5px;
`;

function GeneralComponent(props) {
  const [open, setOpen] = useState(false);
  const onCopy = (text) => {
    copy(text);
    setOpen(true);
    const timer = setTimeout(() => {
      setOpen(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <ContentWrapper>
        <Content>
          <AvatarWrapper>
            <AvatarBorder>
              <Avatar src={AvatarSRC} />
            </AvatarBorder>
          </AvatarWrapper>
          <Wrapper>
            <NameText name={"name"}>Sherwin / Trung Đặng</NameText>
            <NameText name={"info"}>
              Software Engineer <br />
              Web | Mobile Developer
            </NameText>
          </Wrapper>
          <SectionHeader>ABOUT</SectionHeader>
          <Text name={"info"}>
            Hi! I'm Đặng Phương Trung, but you can call me Sherwin, too. I'm a
            Software Engineer who is also a Web | Mobile Developer from Viet
            Nam. My experience has taught me that developing not only create
            software, but also make improve user experience!
          </Text>
          <IconWrapper>
            <ToolTip
              content="Click to view site"
              position="bottom center"
              trigger={
                <Link
                  href="https://www.facebook.com/profile.php?id=100016035575833"
                  target="_blank"
                >
                  <CustomIconComponent component={<FaFacebookSquare />} />
                </Link>
              }
            />
            <ToolTip
              content="Click to view site"
              position="bottom center"
              trigger={
                <Link href="https://github.com/trungdp" target="_blank">
                  <CustomIconComponent component={<FaGithubSquare />} />
                </Link>
              }
            />
            <ToolTip
              content="Click to copy to clipboard"
              position="bottom center"
              trigger={
                <Link onClick={() => onCopy("trungtrs1998@gmail.com")}>
                  <CustomIconComponent component={<FaGooglePlusSquare />} />
                </Link>
              }
            />
            <ToolTip
              content="Click to copy to clipboard"
              position="bottom center"
              trigger={
                <Link onClick={() => onCopy("live:trungtrs1998")}>
                  <CustomIconComponent component={<FaSkype />} />
                </Link>
              }
            />
          </IconWrapper>
          <TransitionablePortal open={open}>
            <CustomSegment
              style={{
                left: "50%",
                position: "fixed",
                top: "75%",
                zIndex: 1000,
              }}
            >
              <Text>Copied!</Text>
            </CustomSegment>
          </TransitionablePortal>
        </Content>
      </ContentWrapper>
    </>
  );
}

GeneralComponent.propTypes = {};

export default GeneralComponent;
