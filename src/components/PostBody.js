import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import PostParagraph from "./PostParagraph"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"

import "../styles/post_body.scss"

const PostBody = ({sections}) => {
    console.log('sections:', sections)
    return (
        <div className="PostBody">
            {/* {sections.map((sections, key) => (
                <PostParagraph key={key} content={sections}></PostParagraph>
            ))} */}
            <div dangerouslySetInnerHTML={{ __html: sections }}></div>
        </div>
    )
}

export default PostBody