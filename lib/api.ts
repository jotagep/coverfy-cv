import Prismic from "prismic-javascript"
import { Home } from "interfaces"

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`

export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_API_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(
  query: String,
  { previewData = null, variables = null }: any = {}
) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error("Failed to fetch API")
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

export async function getHome(): Promise<Home> {
  const dataResult = await fetchAPI(`
    {
      allHomes {
        edges {
          node {
            opiniones {
              image
              name
              text
              stars
            }
            garantias {
              title
              icon
              text
            }
            medios {
              image
              text
              link {
                ... on _ExternalLink {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return dataResult?.allHomes?.edges.map((item: any) => item.node)[0]
}
