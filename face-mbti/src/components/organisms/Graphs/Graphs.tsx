import React from 'react';
import styled from 'styled-components';
import ResultGraphCircles from '../../molecules/ResultGraphs/ResultGraphCircles';
import ResultDescriptionText from '../../molecules/ResultDescription/ResultDescriptionText';

const StyleDiv = styled.div`
    margin-top:15%;
    margin-right:2%;
    width: 25%;
    background-color : #ffffff;
    box-shadow: 5px 15px 4px rgba(0,0,0,0.5);
    border-radius : 20px;
    .CircleButtons{
        display : flex;
        flex-direction : row;
        justify-content : space-around;
        margin-top:80%;
        margin-left:7%;
        margin-right:7%;
    }
    .TypeDescriptions{
        text-align : center;
        margin-left : auto;
        margin-right : auto;
    }
`;

const Graphs = () => {
    return(
        <>
        <StyleDiv>
            <ResultGraphCircles/>
        </StyleDiv>
        <StyleDiv>
            <ResultDescriptionText/>
        </StyleDiv>
        </>
        
    )
}
export default Graphs;