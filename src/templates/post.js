import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Post = props => {
    const post = props.data.contentfulPost
    const author = post.author
    const avatar = author.avatar
    const textHtml = post.text.childMarkdownRemark.html
    return (
        <Layout>
            <h1>{post.title}</h1>
            <img src="{avatar.fixed.src}" alt="" />
            <small>{author.name} | {post.publishedAt}</small>
            <div dangerouslySetInnerHTML = {{ __html:textHtml}}></div>
        </Layout>
    )
}

export default Post

export const query = graphql`
    query($slug: String!) {
        contentfulPost(slug: {eq:$slug}) {
            title
            publishedAt(formatString:"YYYY/MM/DD") 
            text {
                childMarkdownRemark {
                    html
                }
            }
            author {
                name
                avatar {
                    fixed {
                        width
                        height
                        src
                    }
                }
            }
        }
    }
`
