export default async function send(req, res) {
  const {
    query: { id },
  } = req

  const domain = process.env.SHOPIFY_STORE_DOMAIN
  const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

  async function ShopifyData(query) {
    const URL = `https://${domain}/api/2022-10/graphql.json`

    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query })
    }

    try {
      const data = await fetch(URL, options).then(response => {
        return response.json()
      })

      return data
    } catch (error) {
      throw new Error("Products not fetched")
    }
  }
const gql = String.raw
  async function getProduct(handle) {
    const query = gql`
      {
    products(first: 4) {
      edges {
        node {
          id
          handle
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
      			}
             priceRange{
                maxVariantPrice {
                  amount
                }
      			}
          
        }
      }
    }
  }


  `

    const response = await ShopifyData(query)

    const product = response.data.products ? response.data.products : []

    return product
  }

  const product = await getProduct(id)
  res.json(product)
}

