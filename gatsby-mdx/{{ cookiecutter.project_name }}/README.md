# This is the template for render static contents from MDX in gatsby

```bash
cd <project_name> && yarn
yarn dev 
// or yarn develop
```
**Project structure**
```
├── gatsby-browser.js 
├── gatsby-config.ts
├── gatsby-node.ts
├── graphql.config.js
├── package.json
├── postcss.config.js
├── README.md
├── src
│  ├── components
│  │  ├── Card.tsx
│  │  └── Header.tsx
│  ├── hooks
│  │  └── useSiteMetadata.ts
│  ├── layouts
│  │  └── Layout.tsx
│  ├── pages
│  │  ├── 404.tsx
│  │  └── index.tsx
│  ├── posts
│  │  ├── post-1
│  │  │  ├── index.mdx
│  │  │  └── sth.mdx
│  │  ├── post-2.mdx
│  │  └── post-3.mdx
│  ├── styles
│  │  └── global.css
│  └── templates
│     └── blog-page.tsx
├── tailwind.config.js
└── tsconfig.json
```

## `gatsby-config.ts`

Control most of gatsby configuration

***! important***

- add collection to path 
	
	> The example using the `posts` collection in `./src/posts/**/*.mdx`, which will be register to `createPage` lifecycle hooks. Change this to your desired collection name  
```ts
{
	resolve:  'gatsby-source-filesystem',
	options: {
	"name":  "posts",
	"path":  "./src/posts/"
	},
	__key:  "posts"
},
```

## `gatsby-node.ts`

Setup `createPage` lifecycle hook

***! important***

Again, change the collection slug (the example is using `blog` prefix) and the template file (example is `blog-page.tsx`)