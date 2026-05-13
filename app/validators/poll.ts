import vine from '@vinejs/vine'

export const createPollValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(255),
    options: vine.array(vine.string().trim().minLength(1)).minLength(2).maxLength(8),
  })
)