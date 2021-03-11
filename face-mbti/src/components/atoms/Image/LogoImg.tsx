import React from 'react';
import styled from 'styled-components';

const Styled_li = styled.li`
    margin-right : 5px;
    margin-left : 5px;
    margin-top : 5px;
    margin-bottom : 5px;
`;
const StyledImg = styled.img`
    display : block;
`;
interface Props{
    src : string,
}

const LogoImg:React.FC<Props> = ({src}) => {
    return(
        <Styled_li>
            <StyledImg width='30px' src={src} alt="Logo"/>
        </Styled_li>
    )
}

export default LogoImg;