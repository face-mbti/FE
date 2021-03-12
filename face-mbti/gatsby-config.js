/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// gatsby-config.js
require('dotenv').config({
  path: `.env.${process.env.KAKAO_KEY}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
  proxy: {
    prefix: "/api",
    url: "http://developers.kakao.com/sdk/js/kakao.js",
  },
  proxy:{
    prefix: "/api2",
    url : "http://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png",
  }
}