import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

declare global {
    interface Window {
      Kakao : any;
    }
}

const Styled_li = styled.li`
    margin-right : 5px;
    margin-left : 5px;
    margin-top : 5px;
    margin-bottom : 5px;
`;
const StyledImg = styled.img`
    display : block;
`;

const KakaoLogo = () => {
    useEffect(()=>{
        if(window.Kakao.isInitialized() == false){
            window.Kakao.init(process.env.KAKAO_KEY);
        }
        console.log(window.Kakao.isInitialized());
    },[])

    return(
        <Styled_li>
            <a id='create-kakao-link-btn' href='#'>
                <StyledImg width='30px' src='//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png'/>
            </a>
        </Styled_li>

    )
}
export default KakaoLogo;