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
        color='blueB'
      />
      <Button size="large" color="blue" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Button size="medium" color="blue" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Button size="small" color="blue" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Button size="large" color="white" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Button size="medium" color="white" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Button size="small" color="white" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Loading message="wait!"/>
    </>
  )
}
