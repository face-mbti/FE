import React from 'react';
import styled, {css} from 'styled-components';
//import {theme} from '../../styles/theme';
// ToDo : font size 
const StyleDiv = styled.div.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
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

const TextBoard : React.FC<Props> = ({ title, size, color,}) => {
    return (
        <StyleDiv size="2em" color={color}>
            {title}
        </StyleDiv>
    )
}
export default TextBoard;