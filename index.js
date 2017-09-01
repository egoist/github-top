const cheerio = require('cheerio')
const axios = require('axios')
const formatDate = require('date-fns/format')

const parse = $ => {
  const topStarred = []
  const topStarredRepeated = []
  const topNew = []

  const query = context => {
    const repo = context.find('h3').text().trim()
    const stats = context.find('p').first()
    const stars = Number(stats.find('span[title="Total Stars"]').text())
    const growth = Number(stats.find('span[title="New Stars"]').text())
    const timesListed = Number(stats.find('span[title="Times Listed"]').text())
    const language = stats.find('span[title="Language"]').text()
    return {
      repo,
      url: `https://github.com/${repo}`,
      description: context.find('h3').next().text().trim(),
      stars,
      growth,
      timesListed,
      language
    }
  }

  const findIn = (el, stack) => {
    $(el).find('.repository ').each(function () {
      stack.push(query($(this)))
    })
  }

  findIn('#top-all-firsts', topStarred)
  findIn('#top-all-repeats', topStarredRepeated)
  findIn('#top-new', topNew)

  return {
    topStarred,
    topStarredRepeated,
    topNew
  }
}

module.exports = time => {
  const date = formatDate(time, 'YYYY/MM/DD/')
  return axios.get(`http://nightly.changelog.com/${date}`)
    .then(res => {
      const $ = cheerio.load(res.data)
      return parse($)
    })
}
