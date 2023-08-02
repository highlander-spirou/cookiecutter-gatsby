import React from 'react'
import { graphql, PageProps, Link } from "gatsby"

export const p = graphql`
query PostBySlug($slug: String!) {
  mdx(fields: {slug : {eq: $slug}}) {
    excerpt(pruneLength: 250)
    frontmatter {
      title
      date
      since: date(fromNow: true)
    }
  }
}
`

const BlogPage = ({ data, children }: PageProps<Queries.PostBySlugQuery>) => {
  return (
    <>
      <div className='container mt-5 mx-5'>
        <Link to="/" className='flex gap-1 hover:underline items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span>Home</span>
        </Link>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p className='italic'>{data.mdx.frontmatter.since}</p>
        <main className='prose mx-auto mt-5 w-[75%] border-2'>
          {children}
        </main>
      </div>
    </>
  )
}

export default BlogPage

