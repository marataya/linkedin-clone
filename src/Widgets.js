import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return <div className="widgets__article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("We gon make money", '999 readers')}
            {newsArticle("We gon make even more money", '9999 readers')}
            {newsArticle("We gon make trillions", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
            {newsArticle("News Placeholder", '99999 readers')}
        </div>
    )
}

export default Widgets
