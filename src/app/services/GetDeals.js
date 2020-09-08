import 'dotenv'
import { getAllDeals } from 'pipedrive/lib/Controllers/DealsController';
import lib from 'pipedrive';
lib.Configuration.apiToken = `de053098e9b4a299279d54cac7ef571bed07377e`;

const getDeals = (async (data) => {

  var orderslist = [];
  const { status = 'won' } = data;

  const deal = await getAllDeals({ status });

  deal.data.map(async deal => {
    const order = {
      id: deal.id,
      name: deal.owner_name,
      code: deal.id,
      title: deal.title,
      unitValue: deal.value,
      contact_person: deal.person_name,
      currency: deal.weighted_value_currency,
      total_value: deal.weighted_value,
    };

    orderslist.push(order)
    return orderslist

  });


  return (orderslist)
})

export default getDeals;
