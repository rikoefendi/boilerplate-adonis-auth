/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({auth}) => {
  return { hello: 'world' }
})

Route.group(async () => {
  Route.group(() => {
    Route.post('/signin', 'AuthController.signin')
    Route.post('/register', 'AuthController.register')
    Route.get('/', 'AuthController.index').middleware('auth')
    Route.get('/logout', 'AuthController.logout').middleware('auth')
    Route.post('/forgot-password', 'PasswordResetController.request')
    Route.post('/reset-password', 'PasswordResetController.reset')
  }).prefix('auth')
}).prefix('v1')
