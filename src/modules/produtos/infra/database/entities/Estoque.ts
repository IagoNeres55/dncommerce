import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Produtos } from './Produtos'
import { IEstoque } from '@modules/produtos/domain/models/IEstoque'

@Entity('estoque')
export class Estoque implements IEstoque {
  @PrimaryColumn()
  produto_id: number

  @OneToOne(() => Produtos, produto => produto.estoque)
  @JoinColumn({ name: 'produto_id' }) // conecta estoque.produto_id ao produtos.id
  produto: Produtos

  @Column({ type: 'integer' })
  quantidade_disponivel: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
