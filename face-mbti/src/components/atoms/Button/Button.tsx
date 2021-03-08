import React from 'react';
import styled, {css} from 'styled-components';

const StyleSize = css`
    ${(props: Props) => 
    props.size === 'large' &&
    css`
        height : 3rem;
        width : 5rem;
        font-size: 1.25rem;
    `}

    ${(props: Props) => 
    props.size === 'medium' &&
    css`
        height : 2.25rem;
        width : 4rem;
        font-size: 1rem;
    `}

    ${(props: Props) => 
    props.size === 'small' &&
    css`
        height : 1.75rem;
        width : 3rem;
        font-size: 0.875rem;
    `}
`;
const StyleColor = css`
    ${(props: Props) =>
    props.color === 'blue' &&
    css`
        background : rgba(61, 122, 244, 1);
        border-style : 1px solid;
        color : white;
        &:hover{
            background: white;
        }
    `}

    ${(props: Props) =>
    props.color === 'white' &&
    css`
        background: white;
        border-style : 1px solid;
        color : blue;
        &:hover{
            color : white;
            background-color: rgba(61, 122, 244, 1);
        }
    `}
`;

const StyleButton = styled.button`
    ${StyleColor}
    border-radius: 25px;
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
    onClick: () => void;
    onMouseEnter : () => void;
    onMouseLeave : () => void;
    disabled : boolean;
}

const Button : React.FC<Props> = (
    {
        title,
        size,
        color,
        onClick,
        onMouseEnter,
        onMouseLeave,
        disabled
    }
) => (
    <StyleButton
        size={size} color={color}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
    >
        {title}
    </StyleButton>
);
Button.defaultProps = {
    size : 'medium',
    color : 'blue',
}
export default Button;