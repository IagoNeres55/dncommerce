// do usuário autenticado ao objeto req de forma tipada.
declare namespace Express {
  export interface Request {
    user: {
      id: string
    }
  }
}
