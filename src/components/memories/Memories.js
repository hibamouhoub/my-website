import React from 'react'
import '../home/Home.css'
import './Memories.css'
import {Picture} from './Picture'
import images from '../../images/images'

export const Memories = ({ imageB }) => {

    const pictures = images.map(image =>{
        console.log(image)
        return <Picture imageURL= {image} date='01-04-2021'/>
    })
    
    return (
        <div id={imageB} className="section">
                <div className="title-group">
                    <h1 className="artH1">
                        .. because every picture tells a story
                    </h1>
                </div>
                <div className="card-grid">
                    {pictures}
                </div>
            
        </div>

    )
}
