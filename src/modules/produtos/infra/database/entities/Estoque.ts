import { IEstoque } from 'modules/produtos/domain/models/IEstoque'
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm'
import { Produtos } from './Produtos'

export class Estoque implements IEstoque {
  @OneToOne(() => Produtos)
  @JoinColumn({ name: 'produto_id' })
  produto_id: Produtos

  @Column({ type: 'integer' })
  quantidade_disponivel: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
