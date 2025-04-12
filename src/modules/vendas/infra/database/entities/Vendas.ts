import { Pedidos_Produtos } from 'modules/pedidos/infra/database/entities/Pedidos_Produtos'
import { IVendas } from 'modules/vendas/domain/models/IVendas'
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export enum MetodoPagamento {
  CREDITO = 'credito',
  DEBITO = 'debito',
  PIX = 'pix',
  BOLETO = 'boleto',
}

export enum StatusPagamento {
  PENDENTE = 'pendente',
  PAGO = 'pago',
  CANCELADO = 'cancelado',
}

export class Vendas implements IVendas {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Pedidos_Produtos)
  @JoinColumn({ name: 'ped_prod_id' })
  ped_prod_id: Pedidos_Produtos

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor_total: number

  @Column({ type: 'date' })
  data_venda: Date

  @Column({ type: 'enum', enum: MetodoPagamento})
  metodo_pagamento: MetodoPagamento

  @Column({ type: 'enum', enum: StatusPagamento, default: StatusPagamento.PENDENTE })
  status_pagamento: StatusPagamento

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
