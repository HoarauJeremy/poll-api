import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'votes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('poll_id').unsigned().references('id').inTable('polls').onDelete('CASCADE')
      table.integer('option_id').unsigned().references('id').inTable('options').onDelete('CASCADE')
      table.string('session_id').notNullable()
      table.timestamp('voted_at').notNullable()
      table.unique(['poll_id', 'session_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}