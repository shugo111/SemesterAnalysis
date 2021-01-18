import React from 'react'
import Nav from '../component/navbar'

export default function Api() {
    const iframe=()=>{
        return {
            __html: '<iframe src="https://semdata.rxav.pw/docs" width="100%" height="680"></iframe>'
          }
    }
    return (
        <div>
            <Nav/>
            <div dangerouslySetInnerHTML={ iframe() } />
        </div>
    )
}
