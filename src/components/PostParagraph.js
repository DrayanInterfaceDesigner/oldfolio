import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"

import "../styles/post_paragraph.scss"

const PostParagraph = ({content}) => {
    return (
        <div className="PostParagraph">
            {content.section_title && <p className="title">{content.section_title}</p>}
            <p className="text">{content.text}</p>
        </div>
    )
}

export default PostParagraph