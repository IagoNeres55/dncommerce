import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CriarTableEstoque1742901814887 implements MigrationInterface {
  private foreignKey = new TableForeignKey({
    columnNames: ['produto_id'],
    referencedTableName: 'produtos',
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    name: 'FK_Estoque_Produto',
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estoque',
        columns: [
          {
            name: 'produto_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'quantidade_disponivel',
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
        uniques: [{ columnNames: ['produto_id'] }],
      }),
    )

    // cria chave estrangeira
    await queryRunner.createForeignKey('estoque', this.foreignKey)
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('estoque', this.foreignKey.name as string)
    await queryRunner.dropTable('estoque')
  }
}
