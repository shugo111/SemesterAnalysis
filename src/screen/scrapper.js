import React from 'react'
import Nav from '../component/navbar'

export default function Scrapper() {
    const iframe=()=>{
        return {
            __html: '<iframe src="https://scrapper-web.rxav.pw/ui/list" width="100%" height="680"></iframe>'
          }
    }
    return (
        <div>
            <Nav/>
            <div dangerouslySetInnerHTML={ iframe() } />
        </div>
    )
}
