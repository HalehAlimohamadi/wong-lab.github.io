
// remark-gfm has a bug right now: https://github.com/remarkjs/remark-gfm/issues/57
// import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // remarkPlugins: [remarkGfm],
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: false,
  },
}

export default withMDX(nextConfig)
