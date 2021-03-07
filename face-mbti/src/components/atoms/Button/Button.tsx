import React from 'react';
import styled from 'styled-components';


const StyleButton = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover{
        background: rgba(255,255,255,0.8);
    }
`;

interface Props{
    title : string,
    onClick: () => void;
    onMouseEnter : () => void;
    onMouseLeave : () => void;
    disabled : boolean;
}

const Button : React.FC<Props> = (
    {
        title,
        onClick,
        onMouseEnter,
        onMouseLeave,
        disabled,
    }
) => (
    <StyleButton
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
    >
        {title}
    </StyleButton>
)
export default Button;