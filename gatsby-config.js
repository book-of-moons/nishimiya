module.exports = {
  siteMetadata: {
    title: `Book of Moons`,
    subtitle: `-->`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "u4dvgl32",
        dataset: "production",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
