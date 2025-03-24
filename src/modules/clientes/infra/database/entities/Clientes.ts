import { IClientes } from 'modules/clientes/domain/models/IClientes'
import { Usuarios } from 'modules/usuarios/infra/database/entities/Usuarios'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
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

  @OneToOne(() => Usuarios)
  @JoinColumn({ name: 'usuario_id' })
  Usuarios: Usuarios

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
