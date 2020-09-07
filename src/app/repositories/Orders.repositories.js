
class OrdersRepositories {

  async index(req, res) {
    try {

      return res.status(200).json({ msg: 'ok' });
    } catch (error) {
      return res.status(400).json({ error: 'Algo deu errado' })
    }
  }
  async create(req, res) {
    try {

      return res.status(200).json({ msg: 'ok' });
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new OrdersRepositories();
