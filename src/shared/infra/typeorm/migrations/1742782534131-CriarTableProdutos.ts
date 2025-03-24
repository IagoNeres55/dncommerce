import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CriarTableProdutos1742782534131 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'preco',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'quantidade_estoque',
            type: 'integer',
          },
          {
            name: 'categoria',
            type: 'integer',
          },
        ],
      }),
    )

    await queryRunner.createForeignKey(
      'produtos',
      new TableForeignKey({
        columnNames: ['categoria'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categoria',
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos')
  }
}
