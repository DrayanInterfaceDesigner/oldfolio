import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import PostTitle from "./PostTitle"
import PostImage from "./PostImage"
import PostBody from "./PostBody"
import "../styles/base.scss"
import "../styles/palette.scss"
import "../styles/icons.scss"
import "../styles/navbar.scss"

const Nav = (props) => {
    return (
      <div className="Nav">
        <div className="navbar">
        <Link className="button i_know_doing_this_is_ugly">fale comigo</Link>
          <div className="navbar__inner">
              <Link className="navbar__link" to="/">
              <i class="material-icons">dashboard</i>
                Home
              </Link>
              <Link className="navbar__link" to="/projects">
                <i class="material-icons">construction</i>
                Projetos
                </Link>
          </div>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=995484638" className="button" to="/contact">fale comigo</a>
        </div>
  
      </div>
    )
}

export default Nav