import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CriarTablePedidos1742772427014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedidos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cliente_id',
            type: 'integer',
          },
          {
            name: 'data_pedido',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'status',
            type: 'integer',
            default: 1,
          },
          {
            name: 'total',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
        ],
      }),
    )

    await queryRunner.createForeignKey(
      'pedidos',
      new TableForeignKey({
        columnNames: ['status'],
        referencedColumnNames: ['id'],
        referencedTableName: 'status_pedido',
        onDelete: 'SET NULL',
      }),
    ),
      await queryRunner.createForeignKey(
        'pedidos',
        new TableForeignKey({
          columnNames: ['cliente_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'clientes',
          onDelete: 'SET NULL',
        }),
      )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedidos')
  }
}
