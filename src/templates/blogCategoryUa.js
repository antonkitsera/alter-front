import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/ua/layout"
import SEO from "../components/seo"

import "../styles/blog.scss"

export const query = graphql`
    query UaCategory($id: Int!) {
        allStrapiUaArticles(filter: { ua_category: { id: { eq: $id } } }) {
            edges {
                node {
                    id
                    strapiId
                    Name
                    Text
                    Date(formatString: "DD.MM.YYYY")
                    Image {
                        publicURL
                    }
                }
            }
        }
        strapiUaCategories(strapiId: { eq: $id }) {
            Name
        }
        allStrapiUaCategories {
            edges {
                node {
                    Name
                    strapiId
                }
            }
        }
    }
`

const BlogCategoryUa = ({ data }) => {
    console.log(data)

    const articles = data.allStrapiUaArticles.edges;
    const categories = data.allStrapiUaCategories.edges;

    const CyrTranslit = str => {
    
        let cyr = {
            'а': 'a',
            'б': 'b',
            'в': 'v',
            'г': 'g',
            'ґ': 'g',
            'д': 'd', 
            'е': 'e',
            'ё': 'e',
            'є': 'ye',
            'ж': 'j', 
            'з': 'z', 
            'и': 'y',
            'і': 'i',
            'ї': 'yi',
            'й': 'i',
            'к': 'k', 
            'л': 'l', 
            'м': 'm', 
            'н': 'n', 
            'о': 'o', 
            'п': 'p', 
            'р': 'r', 
            'с': 's', 
            'т': 't', 
            'у': 'u', 
            'ф': 'f', 
            'х': 'h', 
            'ц': 'c', 
            'ч': 'ch', 
            'ш': 'sh', 
            'щ': 'shch', 
            'ы': 'y', 
            'э': 'e', 
            'ю': 'u', 
            'я': 'ya',
            'ь': '',
            'ъ': ''
        }, n_str = [];
        
        for (let i = 0; i < str.length; ++i) {
          n_str.push(
              cyr[str[i]]
              || (cyr[str[i].toLowerCase()] === undefined && str[i])
              || cyr[str[i].toLowerCase()].replace(/^(.)/, 
              function (match) { return match.toUpperCase() })
          );
        }
        
        return n_str.join('').toLowerCase().split(" ").join("-");
      }
  
  return (
  <Layout>
    <SEO title="Blog" />
    
    <section className="g-headline">
      <div className="container">
        <h1 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__title">БЛОГ</h1>
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__text">Новини з юридичної галузі та спеціальні статті від Alter</p>
      </div>
    </section>

    <section className="blog-news">
        <div className="container">
            <h3 className="blog-news__title">ОСТАННІ СТАТТІ</h3>

            <div className="blog-news__wrapper">
                {articles.map(({node}, index) => index < 3 ?
                    <div className="blog-news__item" key={node.id}>
                        <div className="blog-news__image">
                            <img className="blog-news__source" src={node.Image.publicURL} alt=""/>
                        </div>

                        <div className="blog-news__content">
                            <h6 className="blog-news__subtitle">{node.Name}</h6>
                            <p className="blog-news__date">{node.Date}</p>
                        </div>
        
                        <div className="blog-news__block">
                            <Link to={`/blog/article/${CyrTranslit(node.Name)}`} className="blog-news__link">ЧИТАТИ</Link>
                        </div>
                    </div> : null
                )}
            </div>
        </div>
    </section>

    <section className="blog-main">
        <div className="blog-main__wrapper container">
            <div className="blog-main__block">
                <h5 className="blog-main__title">Категорії</h5>

                <ul className="blog-main-list">
                    {categories.map(({node}) =>
                        <li className="blog-main-list__item" key={node.strapiId}>
                            <Link to={`/blog/category/${CyrTranslit(node.Name)}`} className="blog-main-list__link">
                            {node.Name}
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.584976 11.46L5.16998 6.875L0.584976 2.29L1.99998 0.875L7.99998 6.875L1.99998 12.875L0.584976 11.46Z" fill="#2726e8"/>
                            </svg>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="blog-main__block">
                {articles.map(({node}) => 
                <div className="blog-main__item" key={node.id}>
                    <div className="blog-main__image">
                        <img className="blog-main__source" src={node.Image.publicURL} alt=""/>
                    </div>

                    <h6 className="blog-main__subtitle">{node.Name}</h6>

                    <p className="blog-main__text">{node.Text}</p>

                    <div className="blog-main__content">
                        <p className="blog-main__date">23.04.2019</p>

                        <Link to={`/blog/article/${CyrTranslit(node.Name)}`} className="blog-main__link">ЧИТАТИ</Link>
                    </div>
                </div>)}
            </div>
        </div>
    </section>
  </Layout>
)};

export default BlogCategoryUa