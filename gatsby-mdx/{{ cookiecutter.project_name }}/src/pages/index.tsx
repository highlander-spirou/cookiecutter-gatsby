import React from 'react'
import { graphql, PageProps } from 'gatsby';
import Layout from '@layouts/Layout'
import Card from '@components/Card';

export const q = graphql`
query FETCH_POST_DATA {
  allMdx {
    totalCount
    nodes {
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date
        since: date(fromNow: true)
      }
      fields {
        slug
      }
    }
  }
}
`

const extractFetchData = (data: Queries.FETCH_POST_DATAQuery) => {
  return data.allMdx.nodes.map(x => {
    return { ...x.frontmatter, excerpt: x.excerpt, slug: x.fields.slug }
  })
}


const index = ({ data }: PageProps<Queries.FETCH_POST_DATAQuery>) => {
  const dataNodes = extractFetchData(data)
  const numberOfPage = data.allMdx.totalCount
  
  return (
    <>
      <Layout>
        <div className='ml-5 mt-5'>
          <p className='italic'>• {numberOfPage} page(s) found</p>
          <div className='flex gap-5 mt-10'>
            {dataNodes.map((x, index) => {
              return <Card title={x.title} key={index} link={x.slug}/>
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default index