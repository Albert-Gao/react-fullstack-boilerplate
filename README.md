# Fullstack-react-boilerplate

> All latest tech stack in one go. And all comes with sample code for you to start with. The sample is written for a simple ajax app rather than a TODO list.

## Folder structure
- client: Your front-end code
- server: Your back-end code
- config: Server settings
    - packages: NPM packages settings
- public: Some front-end related static assets for building
- tests: Your test cases
- build: Output folder for building (Will be auto cleaned before each build)


## Main dependencies:

This project uses:
- Feathers (As backend)
- React
- Redux
- Redux-saga
- Jest
- Webpack
    - JS/JSX
    - SCSS
    - Images

Feathers is an awesome node.js framework which is currently a thin wrapper around Express.js with support for `CORS`, `Helmet`, `GZip` etc and making develop rest api in a very easy manner via service and hooks. It scales well and supports for splitting your API endpoint into micro service in the future.

Babel-loader configures with `env`, `react`, `object spread` and `generator`.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Install the dependencies: `npm install`
2. Start the server: `npm run start`
3. Start the webpack-dev-server `npm run dev`

## Command:
- `npm run server`: Start the server
- `npm run dev`: Development with Hot module reloading via Webpack-dev-server
- `npm run dev:build`: Build project for development usage for things like debug in Webpack
- `npm run build`: Build project for production.
- `npm run test`: Test via Jest

## Testing
- To be added, with Nightwatch

## Changelog
__0.1.0__
- Initial release

## TODO
- The client side example should work with feathers back end rather than Github API.
- Nightwatch for end to end testing
- Docker for deployment

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
