const convertXml = ((data) => {
  return (
    `
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <pedido>
    <cliente>
        <nome>${data.name}</nome>
    </cliente>
    <transporte>
      <volume>
        <servico>digital</servico>
      </volume>
    </transporte>
    <itens>
        <item>
            <codigo>${data.code}</codigo>
            <descricao>${data.title}</descricao>
            <qtde>1</qtde>
            <vlr_unit>${data.unitValue}</vlr_unit>
            <vlr>1</vlr>
        </item>
    </itens>
  </pedido>
  `)

})

export default convertXml;
