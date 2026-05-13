/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

const PollsController = () => import('#controllers/polls_controller')
const VotesController = () => import('#controllers/votes_controller')

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    // Public — votant
    router.get('/polls/:code', [PollsController, 'show'])
    router.post('/polls/:code/votes', [VotesController, 'store'])
    router.get('/polls/:code/results', [VotesController, 'results'])

    // Protégé — organisateur
    router.group(() => {
      router.get('/polls', [PollsController, 'index'])
      router.post('/polls', [PollsController, 'store'])
      router.patch('/polls/:id/close', [PollsController, 'close'])
    }).use(middleware.auth())
  })
  .prefix('/api')