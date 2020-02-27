import React from 'react';

import { graphql, Link } from "gatsby"

import Layout from "../components/ua/layout"
import SEO from "../components/seo"

import "../styles/blog.scss"

export const query = graphql`
query ArticleUaQuery($id: Int!) {
	strapiUaArticles(strapiId: { eq: $id }) {
        Image {
          publicURL
        }
        strapiId
		Name
        Date(formatString: "DD.MM.YYYY")
		Text
	}
}
`;

const blogArticleUa = ({data}) => {
    const article = data.strapiUaArticles;

    return (
        <Layout>
            <SEO title="Blog" />

            <section className="blog-article">
                <div className="blog-article__image">
                    <img className="blog-article__source" src={article.Image.publicURL} alt=""/>
                </div>

                <h3 className="blog-article__title">{article.Name}</h3>

                <p className="blog-article__text">{article.Text}</p>

                <p className="blog-article__date">{article.Date}</p>
            </section>
        </Layout>
    );
}

export default blogArticleUa
