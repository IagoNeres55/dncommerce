import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IProdutos } from '@modules/produtos/domain/models/IProdutos'
import { Estoque } from './Estoque'
import { Categoria } from './Categoria'

@Entity('produtos')
export class Produtos implements IProdutos {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  descricao: string

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number

  @Column({ type: 'integer' })
  quantidade_estoque: number

  @OneToOne(() => Estoque, estoque => estoque.produto, {
    cascade: true,
    eager: true,
  })
  estoque: Estoque

  @OneToOne(() => Categoria)
  @JoinColumn({ name: 'categoria' })
  categoria: Categoria

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date

  retirarEstoque(quantidade: number) {
    if (!this.estoque) {
      throw new Error('Estoque não está carregado.')
    }

    if (this.estoque.quantidade_disponivel < quantidade) {
      throw new Error('Estoque insuficiente.')
    }

    this.estoque.quantidade_disponivel -= quantidade
  }
}
