import React from "react"
import ElipseButton from '../components/atoms/Button/ElipseButton';
import Loading from '../components/atoms/Loading/Loading';
import ResultProfileBox from '../components/molecules/ResultProfileBox/ResultProfileBox';

export default function Home() {
  return (
    <>
      <ResultProfileBox 
        src='../../profileSample.png'
        alt='sample'
        onClick={null}
        title='Jia Lee'
        description=''
        color='blueB'
      />
      <ElipseButton size="large" color="blue" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <ElipseButton size="medium" color="blue" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <ElipseButton size="small" color="blue" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <ElipseButton size="large" color="white" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <ElipseButton size="medium" color="white" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <ElipseButton size="small" color="white" title="click" onClick={null} onMouseEnter={null} onMouseLeave={null} disabled={false}/>
      <Loading message="wait!"/>
    </>
  )
}
