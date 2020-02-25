import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/ua/layout"
import SEO from "../components/seo"

import "../styles/blog.scss"

import NewsImage from "../images/news-1.png"

const BlogPage = () => {
  
  return (
  <Layout>
    <SEO title="Blog" />
    
    <section className="g-headline">
      <div className="container">
        <h1 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__title">BLOG</h1>
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__text">News from law industry and special articles from Alter</p>
      </div>
    </section>

    <section className="blog-news">
        <div className="container">
            <h3 className="blog-news__title">LATEST ARTICLES</h3>

            <div className="blog-news__wrapper">
                {[1,2,3].map(item =>
                    <div className="blog-news__item" key={item}>
                        <div className="blog-news__image">
                            <img className="blog-news__source" src={NewsImage} alt=""/>
                        </div>

                        <div className="blog-news__content">
                            <h6 className="blog-news__subtitle">NEWS TITLE</h6>
                            <p className="blog-news__date">23.04.2019</p>
                        </div>
        
                        <div className="blog-news__block">
                            <Link className="blog-news__link" to="/">MORE INFO</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>

    <section className="blog-main">
        <div className="container">
            <div>
                <h5>Categories</h5>

                <ul className="">
                    <li>
                        <Link>
                        Test
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.584976 11.46L5.16998 6.875L0.584976 2.29L1.99998 0.875L7.99998 6.875L1.99998 12.875L0.584976 11.46Z" fill="#5124EA"/>
                        </svg>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </section>
  </Layout>
)};

export default BlogPage