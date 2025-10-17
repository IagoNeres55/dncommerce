import { ICategoria } from '@modules/produtos/domain/models/ICategoria'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categoria')
export class Categoria implements ICategoria {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  nome: string

  @Column({ type: 'varchar' })
  descricao: string
}
