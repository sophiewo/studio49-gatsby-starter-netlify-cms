import React from 'react'
import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const UniqueIndexPageTemplate = ({
  // image,
  title,
  content, 
  contentComponent }) => {

  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {/* <div
                className="full-width-image margin-top-0"
                style={{
                  backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                  backgroundPosition: `top left`,
                  backgroundAttachment: `fixed`,
                }}
              > */}
              <PageContent className="content" content={content} />
            </div>
           {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

{/* }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  </div> */}

UniqueIndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}



const UniqueIndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <UniqueIndexPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

UniqueIndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

// UniqueIndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }


export default UniqueIndexPage

export const UniqueIndexPageQuery = graphql`
  query UniqueIndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

// export const mainPageQuery = graphql`
//   query UniqueIndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "unique-index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//        }
//       }
//     }
// `
