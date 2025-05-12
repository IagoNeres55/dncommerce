import { Pedidos } from './Pedidos'
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Produtos } from '@modules/produtos/infra/database/entities/Produtos'
import { IPedidos_Produtos } from '@modules/pedidos/domain/models/IPedidos_Produtos'
// import { IPedidos_Produtos } from '../../../../pedidos/domain/models/IPedidos_Produtos'

export class Pedidos_Produtos implements IPedidos_Produtos {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Pedidos, pedido => pedido.id, {
    cascade: true,
  })
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedidos

  @ManyToOne(() => Produtos)
  @JoinColumn({ name: 'produto_id' })
  produto: Produtos

  @Column({ type: 'integer' })
  quantidade: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
