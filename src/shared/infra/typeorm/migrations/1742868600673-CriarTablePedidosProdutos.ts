import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CriarTablePedidosProdutos1742868600673
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedido_produtos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pedido_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'produto_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade',
            type: 'integer',
            default: 0,
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
        uniques: [
          {
            columnNames: ['pedido_id', 'produto_id'],
          },
        ],
      }),
    )

    await queryRunner.createForeignKeys('pedido_produtos', [
      new TableForeignKey({
        columnNames: ['pedido_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pedidos',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['produto_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'produtos',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('pedido_produtos')
    if (table) {
      const foreignKeys = table.foreignKeys
      for (const fk of foreignKeys) {
        await queryRunner.dropForeignKey('pedido_produtos', fk)
      }
    }

    await queryRunner.dropTable('pedido_produtos')
  }
}
