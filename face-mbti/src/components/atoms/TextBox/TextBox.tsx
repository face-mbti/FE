import React from 'react';
import styled, {css} from 'styled-components';

// ToDo : font size 

const StyleDiv = styled.div<{color:string, size: string}>`
    width : 100%;
    height : 100%;
    text-align : center;
    padding : 3% 3%;
    font-size : ${props => props.size || '1rem'};
    color : ${props => props.color || 'black'};
`;

interface Props{
    title : string,
    size : string,
    color : string;
}

const TextBoard : React.FC<Props> = ({ title, size, color}) => {
    return (
        <StyleDiv color={color} size={size}>
            {title}
        </StyleDiv>
    )
}
export default TextBoard;