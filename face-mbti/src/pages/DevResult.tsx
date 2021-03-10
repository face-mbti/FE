import React from "react"
import styled from 'styled-components';
import Profile from '../components/organisms/Profile/Profile';
import Graphs from '../components/organisms/Graphs/Graphs';
import ResultGraphCircles from '../components/molecules/ResultGraphs/ResultGraphCircles';

const StyleDiv = styled.div` 
    background: linear-gradient(123.27deg, #ECECEC 33.33%, #FEECE8 84.38%);
    display:flex;
    flex-direction : row;
    padding-left : 5%;
`;

export default function Home() {
    
  return (
    <StyleDiv>
      <Profile/>

      <Graphs/>
    </StyleDiv>
  )
}
