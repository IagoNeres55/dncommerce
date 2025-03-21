import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CriaUsuario1739842179282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "usuarios_perfil_enum" AS ENUM ('admin', 'user', 'moderador');`
    );

    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'perfil',
            type: 'enum',
            enumName: 'usuarios_perfil_enum',
            default: "'user'::usuarios_perfil_enum",
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios')
    await queryRunner.query(`DROP TYPE "usuarios_perfil_enum";`)
  }
}
