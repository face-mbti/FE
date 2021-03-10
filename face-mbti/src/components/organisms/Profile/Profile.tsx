import React from 'react';
import styled from 'styled-components';
import ResultProfileBox from '../../molecules/ResultProfileBox/ResultProfileBox';
import TextBoard from '../../atoms/TextBoard/TextBoard';

const Profile = () => {
    let titleText = "ESTP";
    let infoText = "당신은 어떠한 사람입니다. 블라블라블라";
    return(
        <>
            <ResultProfileBox
                src='../../profileSample.png'
                alt='sample'
                onClick={null}
                title='Jia Lee'
                description=''
                color='blueB'
            />
            <TextBoard
                w='20%'
                h='40%'
                title='infp'
                percent='87%'
            />
        </>
    )
}

export default Profile;