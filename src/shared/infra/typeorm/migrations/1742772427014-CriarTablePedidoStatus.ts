import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CriarTablePedidoStatus1742772427014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status_pedido',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'status',
            type: 'varchar',
            isUnique: true,
          },
        ],
      }),
    )

    await queryRunner.query(`
          INSERT INTO status_pedido (status) VALUES
          ('Iniciado'),
          ('Em separacão'),
          ('Aguardando Pagamento'),
          ('Finalizado')
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status_pedido')
  }
}
