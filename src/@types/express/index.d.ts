import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            user: {
                isAdm: boolean,
                is_seller: boolean,
                id: string;
              }
        }
    }
}