# Fullstack-react-boilerplate

> All latest tech stack in one go. And all come with sample code for you to start with. The sample is written for a simple ajax app rather than a TODO list. I will continue learning best practices from other good boilerplate, currently learned a lot from `create-react-app`.

## 1. Folder structure
- client: Your front-end code
- server: Your back-end code
- config: Server settings
    - packages: NPM packages settings
- public: Some front-end related static assets for building
- tests: Your test cases
- build: Output folder for building (Will be auto cleaned before each build)


## 2. Main dependencies:
### Backend
- [Feathers](https://feathersjs.com/)

### Main front end libs
- React
- React-router
- React-redux (Connect container component to redux store)
- Redux
- Redux-saga

### Tests
- Jest
- Enzyme (to be added)

### Browser Automation
- Nightwatch (to be added)

### Development
- webpack-dev-server
- react-hot-loader
- redux-devtools (Just install this [Chrome plugin](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))
- [react-storybook](https://storybook.js.org/) (Isolated component development environment)

### Building
- Webpack
    - JS/JSX
    - SCSS -> PostCSS auto-prefix and flexbox prefix
    - Images
    - Any assets


Feathers is an awesome node.js framework which is currently a thin wrapper around Express.js with support for `CORS`, `Helmet`, `GZip` etc and making develop rest api in a very easy manner via service and hooks. It scales well and supports for splitting your API endpoint into micro service in the future.

Babel-loader configures with `env`, `react`, `object spread` and `generator`.

## 3. Getting Started
1. Install the dependencies: `npm install`
2. Start the server: `npm run start`
3. Start the webpack-dev-server `npm run dev`

## 4. Command:
- `npm run server`: Start the server
- `npm run dev`: Development with Hot module reloading via Webpack-dev-server
- `npm run dev:build`: Build project for development usage for things like debug in Webpack
- `npm run build`: Build project for production.
- `npm run test`: Test via Jest
- `npm run storybook`: Open Storybook

## 5. Changelog
__0.1.0__
- Initial release

## 6. TODO
- The client side example should work with feathers back end rather than Github API.
- Nightwatch for end to end testing
- Docker for deployment
- PWA support

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
