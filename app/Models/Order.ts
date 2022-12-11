import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'
import User from 'App/Models/User'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @column()
  public userId: number

  @column()
  public sellerId: number

  @column()
  public cost: number

  @column()
  public quantity: number

  @column()
  public paymentStatus: boolean

  @column()
  public dispatchStatus: boolean

  @column()
  public deliveryStatus: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => User)
  public seller: BelongsTo<typeof User>
}
