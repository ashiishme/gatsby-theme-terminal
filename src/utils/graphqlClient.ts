const GraphQLClient = async (queryString: TemplateStringsArray) => {
  try {
    const response = await fetch('http://localhost:8000/__graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `${queryString}`,
      }),
    })
    const { data } = await response.json()
    return data
  } catch (e) {
    console.error('Error: ', e)
  }
}

export default GraphQLClient
