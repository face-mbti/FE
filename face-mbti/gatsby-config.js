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
  },
  proxy:{
    prefix : "/apiImg",
    url : "https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1101370_16037770114407587.jpg"
  },
  proxy:{
    prefix :"/myGit",
    url : "https://github.com/limyeonsoo"
  }
}