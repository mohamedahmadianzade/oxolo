import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1678109360593 implements MigrationInterface {
  name = 'init1678109360593';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "visual_info" ("id" SERIAL NOT NULL, "info" jsonb NOT NULL, CONSTRAINT "PK_f565446e00c25d60addaf8ecb6d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "visual_info"`);
  }
}
