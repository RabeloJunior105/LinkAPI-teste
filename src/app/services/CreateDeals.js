import { post } from 'axios'
import ConvertXml from './ConvertXml'

const createDeals = (async (data) => {
  const promise = await data.map(async (res) => {

    const xml = ConvertXml(res)

    const createRequest = await post(
      `https://bling.com.br/Api/v2/pedido/json/?apikey=c7441545e195efb96c8f6e72bbde05fef2c6220c08755edd2587894841b2d90487ecbf10&xml=${xml}`
    );
    if (createRequest.data.retorno.erros) {
      throw Error(`Código ${createRequest.data.retorno.erros[0].erro.cod}, ${createRequest.data.retorno.erros[0].erro.msg}`)

    }
    return (createRequest.data)
  })

  const response = await Promise.all(promise)
  return (response)

})
export default createDeals
