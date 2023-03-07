import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveNewField1678178914985 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE public."visualInfo"
	      SET info=info-'newfield'`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
