import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div<{w : string, h : string}>` 
    position: relative;
    font-size : 50px;
    width : ${props => props.w};
    height : ${props => props.h};
    text-align : center;
    //background : linear-gradient(123.27deg, #ECECEC 70%, #FEECE8 30%);
    background-color : #ECECEC;
`;
const StyleP = styled.p`
    text-align : center;
    background: linear-gradient(to right, #a849d4 80%, rgba(0,0,0,0));
    -webkit-background-clip : text;
    -webkit-text-fill-color : transparent;
`;
interface Props{
    title : string,
    percent: string,
    w : string,
    h : string,
}

const TextBoard:React.FC<Props> = ({w, h, title, percent}) => {
    return(
        <StyleDiv w={w} h={h}>
            <StyleP>
                {title}<br/>{percent}
            </StyleP>
        </StyleDiv>
    )
}

export default TextBoard;