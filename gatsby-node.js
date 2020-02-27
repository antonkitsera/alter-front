exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      {
        allServicesDataUaJson {
          edges {
            node {
              slug
            }
          }
        }
        allServicesDataEnJson {
          edges {
            node {
              slug
            }
          }
        }
        allStrapiUaArticles {
          edges {
            node {
              strapiId
              Name
            }
          }
        }
        allStrapiUaCategories {
          edges {
            node {
              strapiId
              Name
            }
          }
        }
        allStrapiEnCategories {
          edges {
            node {
              strapiId
              Name
            }
          }
        }
        allStrapiEnArticles {
          edges {
            node {
              strapiId
              Name
            }
          }
        }
      }
    `);

    if(results.error) {
        console.error("Wrong!");
        return
    }

    results.data.allServicesDataUaJson.edges.forEach(edge => {
        const item = edge.node;

        createPage({
            path: `/services/${item.slug}/`,
            component: require.resolve('./src/templates/serviceItemUa.js'),
            context: {
                slug: item.slug,
            }
        });
    });

    results.data.allServicesDataEnJson.edges.forEach(edge => {
      const item = edge.node;

      createPage({
          path: `/en/services/${item.slug}/`,
          component: require.resolve('./src/templates/serviceItemEn.js'),
          context: {
              slug: item.slug,
          }
      });
  });

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

  const UaArticles = results.data.allStrapiUaArticles.edges
  const UaCategories = results.data.allStrapiUaCategories.edges

  const EnArticles = results.data.allStrapiEnArticles.edges
  const EnCategories = results.data.allStrapiEnCategories.edges
  
  UaArticles.forEach(article => {
    createPage({
      path: `/blog/article/${CyrTranslit(article.node.Name)}`,
      component: require.resolve("./src/templates/blogArticleUa.js"),
      context: {
        id: article.node.strapiId,
      },
    })
  })

  UaCategories.forEach(category => {
    createPage({
      path: `/blog/category/${CyrTranslit(category.node.Name)}`,
      component: require.resolve("./src/templates/blogCategoryUa.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })

  EnArticles.forEach(article => {
    createPage({
      path: `/en/blog/article/${article.node.Name}`,
      component: require.resolve("./src/templates/blogArticleEn.js"),
      context: {
        id: article.node.strapiId,
      },
    })
  })

  EnCategories.forEach(category => {
    createPage({
      path: `/en/blog/category/${category.node.Name}`,
      component: require.resolve("./src/templates/blogCategoryEn.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}