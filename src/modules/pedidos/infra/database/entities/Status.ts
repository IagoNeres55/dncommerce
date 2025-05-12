import { IPedido_Status } from '@modules/pedidos/domain/models/IPedido_Status'
import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Status implements IPedido_Status {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  status: string
}
