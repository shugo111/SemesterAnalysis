import React from 'react'
import Nav from '../component/navbar'

export default function ScrapperDoc() {
    const iframe=()=>{
        return {
            __html: '<iframe src="https://scrapper-web.rxav.pw/" width="100%" height="680"></iframe>'
          }
    }
    return (
        <div>
            <Nav/>
            <div dangerouslySetInnerHTML={ iframe() } />
        </div>
    )
}