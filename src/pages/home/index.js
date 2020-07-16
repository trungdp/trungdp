import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {Grid,GridColumn} from "semantic-ui-react";
import AvatarSRC from "../../assets/images/avatar.png";
import BackgroundSRC from "../../assets/images/bg_about.jpeg";

HomePage.propTypes = {

};

const ImageWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 30%;
	transform: translate(-50%,-50%);
	padding: 25px;
	background-color: rgba(46,46,46,0.3);
	border-radius: 999px;
`

const Avatar = styled.img`
	border-radius: 999px;
	border: solid 25px rgba(46,46,46,0.3);
	.mobile{
	  width: 10px
	}
`

const Background = styled.div`
	width: 100%;
	height: 100%;
	min-height: 600px;
	position: absolute;
	opacity: 0.2;
	object-fit: cover;
	background-image: url(${(props)=>props.src || ""});
	background-attachment: fixed;
`

const Hello = styled.h2`
	padding: 5px 15px 5px 15px;
	display: inline-block;
	border-top-left-radius: 100px; 
	border-top-right-radius: 100px; 
	border-bottom-right-radius: 100px; 
	font-family: Quicksand, sans-serif;
	background: #2e2e2e;
	color: #ffffff;
	margin-bottom: 0;
`

const NameWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	.mobile{
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	}
`

const Name = styled.h1`
	font-family: Cutive Mono, monospace;
	font-size: 45px;
	text-alight: left;
	position: relative;
	top: 50%;
	border-right: 2px solid rgba(0,0,0,.75);
	white-space: nowrap;
	overflow: hidden;
	width: 12em;
	animation: typewriter 4s steps(20) 1s 1 both,
								blinkTextCursor 400ms steps(20) infinite normal;
	@keyframes typewriter{
		from{width: 0;}
		to{width: 12em;}
	}
	@keyframes blinkTextCursor{
		from{border-right-color: rgba(0,0,0,.75);}
		to{border-right-color: transparent;}
	}
`
const TypeWriter = styled.p`
	color: #000;
	font-size: 1.5em;
	width: 13.5em;
	white-space: nowrap;
	overflow: hidden;
	position: relative;
	font-family: Cutive Mono, monospace;
	border-right: 2px solid rgba(0,0,0,.75);
	animation: typewriter1 4s steps(22) ${(props)=>(props.start)}s 1 both,
								blinkTextCursor1 300ms steps(22) infinite normal;
	@keyframes typewriter1{
		from{width: 0;}
		to{width: 13.5em;}
	}
	@keyframes blinkTextCursor1{
		from{border-right-color: rgba(0,0,0,.75);}
		to{border-right-color: transparent;}
	}
`

const Collumn = styled(GridColumn)`
	position: relative;
	height: 100vh;
	min-height: 600px
`


function HomePage(props) {

  return (
    <div>
      <Background src={BackgroundSRC}/>
      <Grid>
        <Collumn only={'computer'}  computer={10} >
          <NameWrapper>
            <Hello >Hello, I'm </Hello>
            <Name >Trung Dang | Sherwin</Name>
            <TypeWriter start={6}>Web | Mobile Developer</TypeWriter>
          </NameWrapper>
        </Collumn>
        <Collumn only={'computer'}  computer={6}  >
          <ImageWrapper>
            <Avatar  src={AvatarSRC}/>
          </ImageWrapper>
        </Collumn>
        <Collumn className={'mobile'} only={'mobile'}   mobile={16} >
          <ImageWrapper>
            <Avatar className={'mobile'} src={AvatarSRC}/>
          </ImageWrapper>
        </Collumn>
        <Collumn only={'mobile'}  mobile={16} >
          <NameWrapper className={'mobile'} >
            <Hello >Hello, I'm </Hello>
            <Name >Trung Dang | Sherwin</Name>
            <TypeWriter start={6}>Web | Mobile Developer</TypeWriter>
          </NameWrapper>
        </Collumn>
      </Grid>

    </div>
  );
}

export default HomePage;