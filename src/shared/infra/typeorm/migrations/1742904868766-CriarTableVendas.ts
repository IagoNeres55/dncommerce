import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CriarTableVendas1742904868766 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vendas',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'ped_prod_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'valor_total',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'data_venda',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'metodo_pagamento',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'status_pagamento',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    )
    await queryRunner.createForeignKey(
      'vendas',
      new TableForeignKey({
        columnNames: ['ped_prod_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pedido_produtos',
        onDelete: 'CASCADE',
        name: 'FK_vendas_pedido_products',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('vendas', 'FK_vendas_pedido_products')
    await queryRunner.dropTable('vendas')
  }
}
