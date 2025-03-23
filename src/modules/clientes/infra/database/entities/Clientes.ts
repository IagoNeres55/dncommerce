import { IClientes } from 'modules/clientes/domain/models/IClientes'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('clientes')
export class Clientes implements IClientes {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  telefone: string

  @Column({ type: 'text' })
  endereco: string

  @Column({ type: 'number' })
  usuario_id: number

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
