import React from 'react';
import styled from 'styled-components';
import CircleImg from '../../atoms/Image/CircleImg';
import TextBox from '../../atoms/TextBox/TextBox';

const StyleDiv = styled.div`
    width : 15%;
    height : 30%;
    background : linear-gradient(#ECECEC, #ECECEC 35%, #ffffff 35%, #ffffff 50%) ;
    //border-radius : 10%;
    border-bottom-left-radius : 10%;
    border-bottom-right-radius : 10%;
    align-items : center;
    display : flex;
    padding : 1%;
    flex-direction : column;
    margin-top : 2%;
    margin-bottom : 2%;
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
    const content = "동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만ㅁ세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화";
    return(

        <StyleDiv>
            <CircleImg src={src} alt={alt} onClick={null}/>
            <TextBox title={title} size="1rem" color={'black'}/>
            <TextBox title={content} size="1rem" color={'black'}/>
        </StyleDiv>
        
    )
}

export default ProfileBox;
