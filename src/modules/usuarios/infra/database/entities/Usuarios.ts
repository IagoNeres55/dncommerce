import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IUsuarios } from '../../../domain/models/IUsuarios'
import { Exclude } from 'class-transformer'

export enum Perfil {
  ADMIN = 'admin',
  USER = 'user',
  MODERADOR = 'moderador',
}

@Entity('usuarios')
export class Usuarios implements IUsuarios {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'text' })
  @Exclude()
  password: string

  @Column({ type: 'enum', enum: Perfil, default: Perfil.USER })
  perfil: string

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}
