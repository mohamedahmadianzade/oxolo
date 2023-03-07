import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewField1678178023543 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE public."visualInfo"
	      SET info=jsonb_set(info,'{newfield}','"value"')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE public."visualInfo"
	      SET info=info-'newfield'`,
    );
  }
}
