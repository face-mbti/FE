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
    const {Kakao} = window;
    useEffect(()=>{
        if(Kakao.isInitialized() == false){
            Kakao.init(process.env.KAKAO_KEY);
        }
        console.log(Kakao.isInitialized());

        Kakao.Link.createDefaultButton({
            container : '#kakaoLinkBtn',
            objectType: "feed",
            content:{
                title : "MBTI PREDICTION!",
                description: "하루도 살 수 없는데",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1101370_16037770114407587.jpg",
                link:{
                    webUrl: "https://github.com/limyeonsoo",
                    mobileWebUrl:"https://github.com/limyeonsoo"
                },
            }
        })
    },[])

    return(
        <Styled_li>
            <a id='kakaoLinkBtn' href='#'>
                <StyledImg width='30px' src='//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png'/>
            </a>
        </Styled_li>

    )
}
export default KakaoLogo;