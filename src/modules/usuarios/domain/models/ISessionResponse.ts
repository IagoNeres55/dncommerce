import { IUsuarios } from './IUsuarios'

export interface ISessionResponse {
  user: IUsuarios
  token: string
  access_token: string
}
