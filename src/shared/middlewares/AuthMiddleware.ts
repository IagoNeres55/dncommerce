import { Secret, verify } from 'jsonwebtoken'
import AppError from '@shared/erros/AppError'
import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
  perfil: string
}

const JWT_SECRET = process.env.SECRET_KEY_JWT as Secret

export default class AuthMiddleware {
  public static execute(
    request: Request,
    _response: Response,
    next: NextFunction,
  ): void {
    const authHeader = request.headers.authorization

    if (!authHeader) {
      throw new AppError('TOKEN não informado', 401)
    }

    const [, token] = authHeader.split(' ') as string[]

    try {
      const decodedToken = verify(token, JWT_SECRET as string)

      const { sub, perfil } = decodedToken as ITokenPayload

      request.user = {
        id: sub,
        perfil: perfil,
      }
      return next()
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, 401)
      }
      throw new AppError('Erro desconhecido', 401)
    }
  }
}
