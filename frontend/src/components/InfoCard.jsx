import React from "react";
import styled, {keyframes} from "styled-components";

const blinkRed = keyframes`
  0% {
    color: #d3a8a8;
  }
  50% {
    color: red;
  }
  100% {
    color: #d3a8a8;
  }
`

const Title = styled.span`
  font-weight: bold;
  color: red;
  animation: ${blinkRed} 1s linear infinite;
`;

const Window = styled.div`
  background: #212121;
  font-size: 1.2em;
  padding: 10px;

  & * {
    margin: 2px;
  }
`;

const InfoCard = (props) => {
    return (
        <Window className="">
            <Title>{props.title}</Title>
            <span>{props.content}</span>
        </Window>
    )
}

export default InfoCard;