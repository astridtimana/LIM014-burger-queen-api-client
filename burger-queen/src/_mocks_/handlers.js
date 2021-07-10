import { rest } from 'msw'

export const handlers = [

    //AUTH
    rest.post('http://localhost:8888/auth', (req, res, ctx) => {
        // Persist user's authentication in the session
        localStorage.setItem('token', 'bqueen123')
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json(req.body)  
        )
      }),

      rest.get('http://localhost:8888/users', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json({
          _id: '001',
          email: 'example1@gmail.com',
          roles: { admin: true },
        }
        ),
      )),
    
      rest.post('http://localhost:8888/users', (req, res, ctx) => res(
        ctx.status(200),
        ctx.json(req.body),
      )),
    
      rest.delete('http://localhost:8888/users', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json('')
      )),
    
      rest.put('http://localhost:8888/users/001', (req, res, ctx) => res(
        ctx.status(200),
        ctx.json(req.body),
      )),
    // Handles a GET /user request
    // rest.get('http://localhost:8888/users', null),
    
    //PRODUCTS
    rest.get('http://localhost:8888/products', (_req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json({
            "_id": "001",
            "name": "Ham and-cheese sandwich",
            "price": "10",
            "image": "https://user-images.githubusercontent.com/75852321/123832331-dd233e80-d8ca-11eb-82a5-feba4c93b6d0.png",
            "type": "burger",
            "dateEntry": "02-01-2020"
        })  
        )
    }),

    rest.post('http://localhost:8888/products', (req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json(req.body)  
        )
    }),

    rest.delete('http://localhost:8888/products', (_req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json({})
        )
    }),

    rest.put('http://localhost:8888/products/001', (req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json(req.body)  
        )
    }),

    //ORDERS
    rest.get('http://localhost:8888/orders', (_req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json({
            "_id": "002",
            "userId": "M01",
            "client": "juana",
            "products": [
              {
                "qty": 1,
                "product": {
                  "name": "hamburguesa",
                  "id": "123"
                }
              },
              {
                "qty": 1,
                "product": {
                  "name": "sprite",
                  "id": "111"
                }
              }
            ],
            "status": "pending",
            "dateEntry": "2021-06-13 22:00:00",
            "dateProcesed": "2021-06-13 23:57:30"
          })  
        )
    }),

    rest.post('http://localhost:8888/orders', (req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json(req.body)  
        )
    }),

    rest.delete('http://localhost:8888/orders', (_req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json({})
        )
    }),

    rest.put('http://localhost:8888/orders/002', (req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json(req.body)  
        )
    }),
]