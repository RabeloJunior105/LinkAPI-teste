import Orders from './../schemas/Orders'
const createOrders = (async (data) => {

  const promise = await data.map(async (res) => {
    const createInDatabase = await Orders.create({
      id_order: res.id,
      customer: {
        name: res.name,
        contact_person: res.contact_person
      },
      item: {
        code: res.code,
        description: res.title,
        currency: res.currency,
        total_value: res.total_value,
      },
    });
    return (createInDatabase)
  })

  const createInDatabase = await Promise.all(promise)

  return createInDatabase
})

export default createOrders;
