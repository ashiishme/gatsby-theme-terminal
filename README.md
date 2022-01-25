<div align="center">
<img src="./static/gatsby-theme-terminal-icon.svg" alt="gatsby theme terminal icon"/>
<h1 align="center" style="border: 0;"> Gatsby Theme Terminal </h1>
<p>A Gatsby theme for techies who love terminal / command line / bash like portfolio.</p>
</div>

![whoami](https://user-images.githubusercontent.com/18111862/150438289-c3d9d291-70fe-48a8-8b96-1d9c633396de.png)

# Installation

To install this theme, you will need a starter Gatsby site. Make sure you have Gatsby CLI installed.

## Getting started with Gatsby

Create a new site

```bash
gatsby new my-app https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Above will create a new site using a "Hello world starter from Gatsby"

Currently, the theme has no starter for itself so, you will need to install the theme manually.

## Install Terminal theme

In your `my-app` install the theme.

```bash
npm i git+https://github.com/ashiishme/gatsby-theme-terminal.git
```

## Configure starter site to use Terminal theme

Open `gatsby-config.js` file & add the theme in the plugin array.

```js
module.exports = {
  ...
  plugins: [`gatsby-theme-terminal`],
}
```

Delete the `pages` directory ( including the `index.js` file ) from `src` directory as everything will load from theme unless you want to override ( Theme shadowing )

## Run the project

```bash
gatsby develop
```

It should load the terminal theme ready.
