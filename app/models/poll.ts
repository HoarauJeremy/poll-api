import { DateTime } from 'luxon'
import { column, belongsTo, hasMany, BaseModel } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Option from '#models/option'
import Vote from '#models/vote'

export default class Poll extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare title: string

  @column()
  declare code: string

  @column()
  declare status: 'open' | 'closed'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Option)
  declare options: HasMany<typeof Option>

  @hasMany(() => Vote)
  declare votes: HasMany<typeof Vote>
}