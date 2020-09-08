import { Router } from 'express';
import ordersRouter from './routes/orders.routes'
const routes = Router()

routes.use('/order', ordersRouter)


export default routes;
