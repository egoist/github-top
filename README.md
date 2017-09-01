
# github-top

[![NPM version](https://img.shields.io/npm/v/github-top.svg?style=flat)](https://npmjs.com/package/github-top) [![NPM downloads](https://img.shields.io/npm/dm/github-top.svg?style=flat)](https://npmjs.com/package/github-top) [![CircleCI](https://circleci.com/gh/egoist/github-top/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/github-top/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add github-top
```

## Usage

```js
const githubTop = require('github-top')

githubTop('2014-08-17'/* ← A date string */)
  .then(data => {
    // data: { topStarred: [], topNew: [], topStarredRepeated: [] }
  })
```

## data

```js
{
  // Top starred repos which were not previously featured in Changelog Nightly
  topStarred: Array<Repo>,
  // Top new repos which were open sourced on the day you specify
  topNew: Array<Repo>,
  // Top starred repos were previously featured in Changelog Nightly
  topStarredRepeated: Array<Repo>
}
```

### Repo

Type: `object`

Example:

```js
{ 
  repo: 'mozilla/send',
  url: 'https://github.com/mozilla/send',
  description: 'File Sharing Experiment',
  // Total stars
  stars: 1047,
  // New stars since last day
  growth: 453,
  // The times it appeared in changelog nightly
  timesListed: 2,
  language: 'JavaScript' 
}
```

## Error handling

We're using [axios](https://github.com/mzabriskie/axios) under the hood, so you can handle http error like this:

```js
githubTop()
  .catch(err => {
    if (err.response && err.response.status === 404) {
      console.error('not found')
    }
  })
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**github-top** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/github-top/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
