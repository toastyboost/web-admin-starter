import { fetchMocks, apiMock } from './mocks'

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || ''

export type RequestProps = {
  method?: string
  url: string
  params?: object
}

export const request = async ({
  url,
  method = 'POST',
  params = {}
}: RequestProps): Promise<any> => {
  const fetchUrl = SERVER_ENDPOINT + url
  const options = {
    method,
    body: JSON.stringify(params)
  }

  try {
    const mockMethod = `${method} ${url}`

    if (mockMethod in apiMock) {
      return fetchMocks(fetchUrl, options)
    }

    const response = await fetch(fetchUrl, options)
    const result = await response.json()

    if (!response.ok) {
      throw new Error(result)
    }

    return result
  } catch (err) {
    throw new Error(err)
  }
}
