import test from 'ava'
import githubTop from '../'

test('main', async t => {
  t.snapshot(await githubTop('2017-08-04'), 'repos')
})
