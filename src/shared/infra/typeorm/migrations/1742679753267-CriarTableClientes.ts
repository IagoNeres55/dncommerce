import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTableClientes1742679753267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(
        new Table({
          name: 'clientes',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment'
            },
            {
              name: 'telefone',
              type: 'varchar'
            },
            {
              name: 'endereco',
              type: 'varchar'
            },
            {
              name: 'usuario_id',
              type: 'integer'
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },

          ],
          foreignKeys: [
            {  name: 'cliente_usuarios',
              referencedTableName: 'usuarios',
              referencedColumnNames: ['id'],
              columnNames: ['usuario_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            }

          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clientes')
    }

}
