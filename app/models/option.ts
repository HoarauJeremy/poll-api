import { column, belongsTo, hasMany, BaseModel } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Poll from '#models/poll'
import Vote from '#models/vote'

export default class Option extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pollId: number

  @column()
  declare label: string

  @column()
  declare order: number

  @belongsTo(() => Poll)
  declare poll: BelongsTo<typeof Poll>

  @hasMany(() => Vote)
  declare votes: HasMany<typeof Vote>
}