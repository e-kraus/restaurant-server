import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.unique(faker.internet.email),
    phoneNumber: faker.unique(faker.phone.number),
    password: faker.internet.password(),
    // role: faker.random.arrayElement(['User', 'Employee', 'Admin']),
    role: 'Buyer',
  }
}).build()
