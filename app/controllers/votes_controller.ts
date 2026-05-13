import Poll from '#models/poll'
import Vote from '#models/vote'
import { createVoteValidator } from '#validators/vote'
import type { HttpContext } from '@adonisjs/core/http'

export default class VotesController {
  async store({ params, request, serialize }: HttpContext) {
    const { optionId, sessionId } = await request.validateUsing(createVoteValidator)

    const poll = await Poll.query()
      .where('code', params.code)
      .where('status', 'open')
      .firstOrFail()

    const alreadyVoted = await Vote.query()
      .where('poll_id', poll.id)
      .where('session_id', sessionId)
      .first()

    if (alreadyVoted) {
      return { message: 'Already voted' }
    }

    const vote = await Vote.create({
      pollId: poll.id,
      optionId,
      sessionId,
    })

    return serialize(vote)
  }

  async results({ params, serialize }: HttpContext) {
    const poll = await Poll.query()
      .where('code', params.code)
      .preload('options', (query) => {
        query.preload('votes')
      })
      .firstOrFail()

    const results = poll.options.map((option) => ({
      id: option.id,
      label: option.label,
      order: option.order,
      count: option.votes.length,
    }))

    const total = results.reduce((sum, r) => sum + r.count, 0)

    return serialize({
      pollId: poll.id,
      title: poll.title,
      status: poll.status,
      total,
      results,
    })
  }
}