import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../atoms/Image/LogoImg';


const StyledLogoWrapper = styled.ul`
    list-style : none;
    display : flex;
    flex-direction : row;
    height : 10%;
    border : 1px solid #CBCBCB;
    border-radius : 10px;
    -webkit-padding-start : 0px;
    -webkit-margin-before : 0px;
    padding-left : 2px;
    padding-right : 2px;
    margin-top: 5px;
    margin-right: 5px;
`;

const LogoSet = () => {
    return(
        <StyledLogoWrapper>
            <LogoImg src='/kakao.png'/>
            <LogoImg src='/facebook.png'/>
            <LogoImg src='/twitter.png'/>
            <LogoImg src='/instagram.png'/>
        </StyledLogoWrapper>
    )
}

export default LogoSet;