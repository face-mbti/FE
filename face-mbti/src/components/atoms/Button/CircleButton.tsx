import React from 'react';
import styled, {css} from 'styled-components';

const StyleSize = css`
    ${(props: Props) => 
    props.size === 'large' &&
    css`
        height : 3rem;
        width : 3rem;
    `}

    ${(props: Props) => 
    props.size === 'medium' &&
    css`
        height : 2rem;
        width : 2rem;
    `}

    ${(props: Props) => 
    props.size === 'small' &&
    css`
        height : 1rem;
        width : 1rem;
    `}
`;
const StyleColor = css`
    ${(props: Props) =>
    props.color === 'red' &&
    css`
        background: #DD2A7B;
        &:hover{
            color : white;
            background-color: rgba(61, 122, 244, 1);
        }
    `}
    ${(props: Props) =>
        props.color === 'yellow' &&
        css`
            background : #FEDA77;
            &:hover{
                background: white;
            }
        `}
    ${(props: Props) =>
        props.color === 'orange' &&
        css`
            background: #F58529;
            &:hover{
                color : white;
                background-color: rgba(61, 122, 244, 1);
        }
    `}
    ${(props: Props) =>
        props.color === 'purple' &&
        css`
            background : #8134AF;
            &:hover{
                background: white;
        }
    `}
        
`;

const StyleButton = styled.button`
    ${StyleColor}
    border-radius: 25px;
    border : 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    ${StyleSize}
    font-weight: 200;
`;

interface Props{
    title : string,
    size : string,
    color : string,
    // onClick: () => void;
    // onMouseEnter : () => void;
    // onMouseLeave : () => void;
    // disabled : boolean;
}

const CircleButton : React.FC<Props> = (
    {
        title,
        size,
        color,
        // onClick,
        // onMouseEnter,
        // onMouseLeave,
        // disabled
    }
) => {
    return(
        <StyleButton size={size} color={color}>
            {title}
        </StyleButton>
    )
}
CircleButton.defaultProps = {
    size : 'medium',
    color : 'yellow',
}
export default CircleButton;