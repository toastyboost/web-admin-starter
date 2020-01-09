type FetchProps = {
  method: string
  body: string
}

export const fetchMocks = async (url: string, { method, body }: FetchProps): Promise<Response> => {
  const mockMethod = `${method} ${url}`

  const answer = apiMock[mockMethod](body)

  console.group(`REQUEST MOCK: ${mockMethod}`)
  console.info(`answer:`, answer)
  console.groupEnd()

  return await wait(answer)
}

function wait<T>(data: any): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 500) + 300, JSON.stringify(data))
  })
}

type Mocks = {
  [key: string]: (body: string) => object
}

export const apiMock: Mocks = {
  'POST /user/signin': (body: string): object => {
    let found

    const users: { [key: number]: { id: number; role: string } } = {
      1: {
        id: 1,
        role: 'operator'
      },
      2: {
        id: 2,
        role: 'security'
      },
      3: {
        id: 3,
        role: 'superadmin'
      }
    }

    const params = JSON.parse(body)

    switch (params.login) {
      case 'operator':
        found = {
          user: users[1]
        }
        break
      case 'security':
        found = {
          user: users[2]
        }
        break
      case 'superadmin':
        found = {
          user: users[3]
        }
        break
      default:
        // throw
        return { error: 'Invalid credentials' }
    }

    window.localStorage.setItem('current-user-id', String(found.user.id))

    return found
  },
  'POST /user/logout': (): object => {
    window.localStorage.removeItem('current-user-id')
    return {}
  }
}

class Failed extends Error {
  public data: object
  constructor(data: { error: string }) {
    super(`Failed to fetch data: ${data.error}`)
    this.data = data
  }
}