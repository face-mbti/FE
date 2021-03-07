import React from "react"
import Button from '../components/atoms/Button/Button';
import Loading from '../components/atoms/Loading/Loading';
import CircleImg from '../components/atoms/Image/CircleImg';

export default function Home() {
  return (
    <>
      <CircleImg src={'../../profileSample.png'} alt="sample" onClick={null} />
      
      <Button title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Loading message="wait!"/>
    </>
  )
}
