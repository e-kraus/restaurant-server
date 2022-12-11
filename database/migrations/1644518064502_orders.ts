import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('product_id')
        .unsigned()
        // .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('seller_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('product_name')
      table.string('user_email')
      table.integer('cost')
      table.integer('quantity')
      table.boolean('payment_status')
      table.boolean('dispatch_status')
      table.boolean('delivery_status')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
