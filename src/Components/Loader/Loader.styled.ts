import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: start;
  self-align: flex-start;
  width: 100%;
  padding: 2rem;
`;

const dotPulseKeyframes = keyframes`
0% {
  box-shadow: 9999px 0 0 -5px;
}
30% {
  box-shadow: 9999px 0 0 2px;
}
60%,
100% {
  box-shadow: 9999px 0 0 -5px;
}
`;

const dotPulseBeforeKeyframes = keyframes`
0% {
  box-shadow: 9984px 0 0 -5px;
}
30% {
  box-shadow: 9984px 0 0 2px;
}
60%,
100% {
  box-shadow: 9984px 0 0 -5px;
}
`;

const dotPulseAfterKeyframes = keyframes`
0% {
  box-shadow: 10014px 0 0 -5px;
}
30% {
  box-shadow: 10014px 0 0 2px;
}
60%,
100% {
  box-shadow: 10014px 0 0 -5px;
}
`;

export const LoaderDots = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  min-height: 10px;
  border-radius: 5px;
  background-color: black;
  color: white;
  box-shadow: 9999px 0 0 -5px;
  animation: ${dotPulseKeyframes} 1.5s infinite linear;
  animation-delay: 0.25s;
  opacity: 0.5;
  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: black;
    color: teal;
  }
  &::before {
    box-shadow: 9984px 0 0 -5px;
    animation: ${dotPulseBeforeKeyframes} 1.5s infinite linear;
    animation-delay: 0s;
  }
  &::after {
    box-shadow: 10014px 0 0 -5px;
    animation: ${dotPulseAfterKeyframes} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`;

export const LoaderText = styled.h1`
  font-size: 2em;
  font-weight: 500;
  color: #6c757d;
`;
