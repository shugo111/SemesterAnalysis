import React from 'react'
import Nav from '../component/navbar'

export default function Apidoc() {
    const iframe=()=>{
        return {
            __html: '<iframe src="https://rushyanth111.github.io/Semester-Stats/" width="100%" height="680"></iframe>'
          }
    }
    return (
        <div>
            <Nav/>
            <div dangerouslySetInnerHTML={ iframe() } />
        </div>
    )
}
