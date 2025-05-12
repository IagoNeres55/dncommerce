import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Status } from "./Status"
import { IPedidos } from "@modules/pedidos/domain/models/IPedidos"
import { Clientes } from "@modules/clientes/infra/database/entities/Clientes"

export class Pedidos implements IPedidos {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Clientes)
  @JoinColumn({ name: 'cliente_id' })
  clientes: Clientes

  @Column({ type: 'date' })
  data_pedido: Date

  @OneToOne(() => Status)
  @JoinColumn({ name: 'status' })
  status: Status

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
