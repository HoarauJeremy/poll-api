import { DateTime } from 'luxon'
import { column, belongsTo, BaseModel } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Poll from '#models/poll'
import Option from '#models/option'

export default class Vote extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pollId: number

  @column()
  declare optionId: number

  @column()
  declare sessionId: string

  @column.dateTime({ autoCreate: true })
  declare votedAt: DateTime

  @belongsTo(() => Poll)
  declare poll: BelongsTo<typeof Poll>

  @belongsTo(() => Option)
  declare option: BelongsTo<typeof Option>
}