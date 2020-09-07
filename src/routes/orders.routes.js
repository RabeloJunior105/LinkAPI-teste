import { Router } from 'express';
import OrdersRepository from '../app/repositories/Orders.repositories'
const ordersRoute = Router()

ordersRoute.get('/', OrdersRepository.index)
ordersRoute.post('/', OrdersRepository.create)

export default ordersRoute;
