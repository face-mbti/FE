import React from 'react';
import styled from 'styled-components';
import CircleImg from '../../atoms/Image/CircleImg';
import TextBoard from '../../atoms/TextBoard/TextBoard';
import Button from '../../atoms/Button/Button';

const StyleDiv = styled.div`
    width : 15%;
    height : 30%;
    background : linear-gradient(#ffffff, #ffffff 35%, #e4e4e4 35%, #e4e4e4 50%) ;
    //border-radius : 10%;
    border-bottom-left-radius : 10%;
    border-bottom-right-radius : 10%;
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
            <Button size="medium" color="white" title="Upload" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
        </StyleDiv>
        
    )
}

export default ProfileBox;
