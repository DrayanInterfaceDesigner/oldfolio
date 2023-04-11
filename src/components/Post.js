import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { plain_to_sections } from "../common/parser"
import PostTitle from "./PostTitle"
import PostImage from "./PostImage"
import PostBody from "./PostBody"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"

import "../styles/post.scss"


const Post = ({data}) => {
    console.log('DATAAA:', data)
    const body = data.html
    console.log(body)
    return (
        <div className="Post">
            <PostTitle
                title={data.frontmatter?.title}
                subtitle={data.frontmatter?.subtitle}
            ></PostTitle>
            <PostImage></PostImage>
            <PostBody
            sections={body}
            >
            </PostBody>

        </div>
    )
}

export default Post