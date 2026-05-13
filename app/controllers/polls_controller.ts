import Poll from '#models/poll'
import Option from '#models/option'
import { createPollValidator } from '#validators/poll'
import type { HttpContext } from '@adonisjs/core/http'

export default class PollsController {
  async index({ auth, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const polls = await Poll.query()
      .where('user_id', user.id)
      .orderBy('created_at', 'desc')
    return serialize(polls)
  }

  async store({ auth, request, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const { title, options } = await request.validateUsing(createPollValidator)

    const code = Math.random().toString(36).slice(2, 8).toUpperCase()

    const poll = await Poll.create({
      userId: user.id,
      title,
      code,
      status: 'open',
    })

    await Option.createMany(
      options.map((label, index) => ({
        pollId: poll.id,
        label,
        order: index,
      }))
    )

    await poll.load('options')

    return serialize(poll)
  }

  async show({ params, serialize }: HttpContext) {
    const poll = await Poll.query()
      .where('code', params.code)
      .where('status', 'open')
      .preload('options')
      .firstOrFail()

    return serialize(poll.serialize())
  }

  async close({ auth, params, serialize }: HttpContext) {
    const user = auth.getUserOrFail()
    const poll = await Poll.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .firstOrFail()

    poll.status = 'closed'
    await poll.save()

    return serialize(poll)
  }
}