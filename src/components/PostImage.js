import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import PostTitle from "./PostTitle"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import "../styles/post_image.scss"


const PostImage = ({props}) => {
    return (
        <div className="PostImage">
            <StaticImage className="image"></StaticImage>
        </div>
    )
}

export default PostImage