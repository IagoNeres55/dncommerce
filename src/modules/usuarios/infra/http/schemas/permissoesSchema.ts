import { celebrate, Joi, Segments } from 'celebrate'
import { Perfil } from '../../database/entities/Usuarios'

export const permissoesSchema = celebrate({
  [Segments.BODY]: {
    idUsuario: Joi.number().required(),
    perfil: Joi.string()
      .valid(...Object.values(Perfil))
      .required(),
  },
})
