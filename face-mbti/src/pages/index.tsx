import React from "react"
import Button from '../components/atoms/Button/Button';
import Loading from '../components/atoms/Loading/Loading';
import ProfileBox from '../components/molecules/ProfileBox/ProfileBox';

export default function Home() {
  return (
    <>
      <ProfileBox 
        src='../../profileSample.png'
        alt='sample'
        onClick={null}
        title='Jia Lee'
        description=''
        color='blue'
      />
      <Button title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Loading message="wait!"/>
    </>
  )
}
