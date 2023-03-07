import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1678168717548 implements MigrationInterface {
  name = 'init1678168717548';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "logger" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "message" character varying NOT NULL, "error" character varying NOT NULL, CONSTRAINT "PK_46cad7e44f77ea2fa7da01e7828" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "logger"`);
  }
}
