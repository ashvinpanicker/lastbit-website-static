module.exports = {
	siteMetadata: {
		title: `lastbit`,
		description: `Store and Spend Bitcoin, Securely and Instantly`,
		author: `@ashvinpanicker`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#FF54AC`,
				display: `minimal-ui`,
				icon: `${__dirname}/static/images/logo.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["PT Serif, OpenSans"],
				},
				custom: {
					families: ["Inter"],
					urls: ["/fonts/fonts.css"],
				},
			},
		},
		{
			resolve: "gatsby-plugin-mailchimp",
			options: {
				endpoint:
				"https://lastbit.us18.list-manage.com/subscribe/post?u=7063ad67b1481fb79537c8391&amp;id=ec0b596da5",
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-124343236-2",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
