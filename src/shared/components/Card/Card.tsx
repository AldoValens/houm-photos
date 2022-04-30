import React, { useState} from "react";
import styled from "styled-components";

export const Card = ({url, key, likes, downloads} : {url: string, key: string, likes: string, downloads: string}) => {
    return <Container>
                <Img src={url} key={key} alt=""/>
                <ContainerInfo>
                    <Span>Likes: {likes} </Span>
                </ContainerInfo>
            </Container>
}

const Img =  styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover ;
  border-radius: 10px;
`
const Container = styled.div`
  background:  ${props => props.theme.whiteh} !important;
  padding: 10px 10px 30px 10px;
  border-radius: 10px;

  &:hover {
    display: block;
    opacity:0.5;
    background-color: rgb(0 0 0 /7%);
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
  }
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Span = styled.span`
  color: black;
  margin-left: 10px;
  font-weight: 500;
`