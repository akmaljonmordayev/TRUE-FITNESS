import React from 'react'
import './sectioncomponent3.css'
function sectioncomponent3({imgname, topic, data}) {
  return (
    <>
    <div className='sectioncomponent3-div'>
        <img className='zb-img' src={imgname} alt="" />
        <p className='topic-class'>{topic}</p>
        <p className='data-class'>{data}</p>
    </div>
    </>
  )
}

export default sectioncomponent3