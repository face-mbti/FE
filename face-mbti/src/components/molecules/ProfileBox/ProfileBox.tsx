import React from 'react';
import styled from 'styled-components';
import CircleImg from '../../atoms/Image/CircleImg';
import TextBoard from '../../atoms/TextBoard/TextBoard';

const StyleDiv = styled.div`
    width : 20%;
    height : 20%;
    background-color : lightgray;
    border-radius : 10%;
    align-items : center;
    display : flex;
    padding : 1%;
    flex-direction : column;
`;

interface Props{
    src : string,
    alt : string,
    onClick : () => void;
    title : string,
    description : String,
    color : string,
}

const ProfileBox :React.FC<Props> = ({
    src, alt, onClick,
    title, description, color
}) => {
    return(
        <StyleDiv>
            <CircleImg src={src} alt={alt} onClick={null}/>
            <TextBoard title={title} size="2rem" color={color}/>
        </StyleDiv>
    )
}

export default ProfileBox;