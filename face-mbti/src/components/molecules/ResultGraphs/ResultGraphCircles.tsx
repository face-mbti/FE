import React from 'react';
import styled from 'styled-components';
import CircleButton from '../../atoms/Button/CircleButton';

// const StyleDiv = styled.div`
//     display : flex;
//     flex-direction : row;
//     justify-content : space-between;
// `;

interface Props{
    title :string,
    size :string,
    color: string,
}

const ResultGraphCircles = () => {
    return(
        // <StyleDiv>
        <div className="CircleButtons">
            <CircleButton title='' size='small' color='red' />
            <CircleButton title='' size='small' color='yellow' />
            <CircleButton title='' size='small' color='orange' />
            <CircleButton title='' size='small' color='purple' />
        </div>
        // </StyleDiv>
    )
};

export default ResultGraphCircles;