import React from 'react';
import styled, {css} from 'styled-components';

// ToDo : font size 

const StyleDiv = styled.div`
    width : 100%;
    height : 100%;
    text-align : center;
    padding : 2% 2%;
    color : ${props => props.color || 'black'};
`;

interface Props{
    title : string,
    size : string,
    color : string;
}

const TextBoard : React.FC<Props> = ({ title, size, color}) => {
    return (
        <StyleDiv color={color}>
            {title}
        </StyleDiv>
    )
}
export default TextBoard;