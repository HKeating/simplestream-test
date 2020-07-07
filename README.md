# simplestream-test

This is a Vue.js SPA that fetches an array of videos, displays their thumbnails in a carousel and navigates to a video player view when a user clicks or taps on a thumbnail.

Built with [Vue.js](https://vuejs.org/), [Axios](https://www.npmjs.com/package/axios), [keen-slider](https://keen-slider.io/), [video.js](https://videojs.com/) and [vue-router](https://router.vuejs.org/).

Linting and code style applied with [prettier](https://prettier.io/) and [eslint](https://eslint.org/).

I initialised the project with Vue-cli and added Vuex at that point. In its current state the project does not require Vuex for state management, but a future version could avoid unecessary calls to the api by holding the returned videos in the store to or implementing caching.

Instructions below to run the project locally, or you can view it [here](http://hkeating-simplestream-test.surge.sh/).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
