import { Request, Response, NextFunction } from 'express'

export function checkRoles(...allowedRoles: string[]) {
  return (request: Request, response: Response, next: NextFunction): void => {
    const userRole = request.user?.perfil

    if (!userRole || !allowedRoles.includes(userRole)) {
      response
        .status(403)
        .json({ error: 'Acesso negado: perfil não autorizado.' })
    }

    next()
  }
}
