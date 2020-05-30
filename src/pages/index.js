import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulPost.edges.map(edge => {
      const author = edge.node.author
      return <div>
        <h2>{edge.node.title}</h2>
        
        {/* ↓ここは存在しない可能性がある一番親に近い物を設置する（× edge.node.author.avatar 理由：authorがないパターンがあるから） */}
        { edge.node.author && 
          <img width={20} src={author.avatar.fixed.src} alt={author.name} />
        }
        { edge.node.author && 
          <small>{author.name}</small>
        }
        <p>{edge.node.text.text}</p>
      </div>
    })}
  </Layout>
)

export const query = graphql`
{
  allContentfulPost {
    edges {
      node {
        title
        text {
          text
        }
        author {
          name
          description
          avatar {
            fixed(width: 10) {
              height
              src
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
