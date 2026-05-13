import vine from '@vinejs/vine'

export const createVoteValidator = vine.compile(
  vine.object({
    optionId: vine.number().positive(),
    sessionId: vine.string().trim().minLength(8).maxLength(64),
  })
)