import React from 'react';
import styled from 'styled-components';

const StyleDivWrapper = styled.div`
    width : 100px;
    height : 100px;
    position : relative;
    margin-left : auto;
    margin-right : auto;
`;

const StyleDiv = styled.div`
    width : 100%;
    height : 100%;
    background : linear-gradient(to right, #f58529, #FEDA77, #dd2a7b, #8134af);
    border-radius : 50%;
    //overflow : hidden;
`;

const StyleImg = styled.img`
    position : absolute;
    width : 94%;
    height : 94%;
    border-radius : 50%;
    top: 3px;
    left : 3px;
    //object-fit : cover;
`;


interface Props{
    src : string,
    alt : string,
    onClick : () => void;
}

const CircleImg : React.FC<Props> = (
    {
        src,
        alt,
        onClick,
    }
) => {
    return(
        <StyleDivWrapper>
            <StyleDiv>
                <StyleImg src={src} onClick={onClick} alt={alt} />
            </StyleDiv>
        </StyleDivWrapper>
    )
}
export default CircleImg;