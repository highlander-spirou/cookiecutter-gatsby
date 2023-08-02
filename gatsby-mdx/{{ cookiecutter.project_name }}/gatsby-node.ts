import path from "path";
import type { GatsbyNode } from 'gatsby';
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value: `blog${value}`,
        });
    }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-page.tsx`)
    const request = await graphql<Queries.CreatePageQuery>(`
    query CreatePage {
        allMdx {
            nodes {
              fields {
                slug
              }
              frontmatter {
                title
                date
                since: date(fromNow: true)
              }
              internal {
                contentFilePath
              }
            }
        }
    }
    `)


    const posts = request.data?.allMdx.nodes
    if (posts['errors']) {
        throw posts['errors']
    }
    posts.forEach(post => {
        createPage({
            path: post.fields.slug,
            component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
            context: {
                slug: post.fields.slug,
            }
        })
    })
}