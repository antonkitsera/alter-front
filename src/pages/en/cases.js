import React from "react"

import { graphql } from "gatsby"

import Layout from "../../components/en/layout"
import SEO from "../../components/seo"

import "../../styles/cases.scss"

export const query = graphql`
  query CasesQueryEn {
    allCasesDataJson {
      edges {
        node {
          id
          title
          description
          src {
            publicURL
          }
        }
      }
    }
  }
`;

const CasesPage = ({ data }) => { 
  const casesData = data.allCasesDataJson.edges;
  
  return (
  <Layout>
    <SEO title="Cases" />
    
    <section className="g-headline">
      <div className="container">
        <h1 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__title">OUR CASES</h1>
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__text">Every day we work for the confidence and success of our clients and partners</p>
      </div>
    </section>

    <section className="cases container">
    {casesData.map(({ node }) => 
      <div className="cases_grid" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
        <div className="cases-item" key={node.id}>
            <div className="cases-item__logo">
                <img className="cases-item__source" src={node.src.publicURL} className="cases-item__source" alt="Logo" />
            </div>
            <h3 className="cases-item__title">{node.title}</h3>
            <p className="cases-item__text">{node.description}</p>
        </div>
      </div>
    )}
    </section>
  </Layout>
)};

export default CasesPage