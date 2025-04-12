import { IProdutos } from "modules/produtos/domain/models/IProdutos"
import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "./Categoria"

export class Produtos implements IProdutos {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  descricao: string

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number

  @Column({ type: 'integer' })
  quantidade_estoque: number

  @OneToOne(() => Categoria)
  @JoinColumn({ name: 'categoria' })
  categoria: Categoria

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date

}

