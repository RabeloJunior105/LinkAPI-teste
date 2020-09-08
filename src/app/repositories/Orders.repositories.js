import GetDeals from '../services/GetDeals'
import CreateDeals from '../services/CreateDeals'
import CreateOrders from '../services/CreateOrders'
import Orders from '../schemas/Orders'

class OrdersRepositories {

  async index(req, res) {
    try {
      const response = await Orders.find();

      return res.status(200).json(response)
    } catch ({ message, ...error }) {
      return res.status(400).json({ error: message });
    }
  }

  async create(req, res) {
    try {
      const deals = await GetDeals({ status: req.query.status })

      await CreateDeals(deals)

      const createInDatabase = await CreateOrders(deals)

      return res.status(200).json(createInDatabase);
    } catch ({ message, error }) {
      return res.status(400).json({ message });
    }
  }
}

export default new OrdersRepositories();
