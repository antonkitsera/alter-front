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
}