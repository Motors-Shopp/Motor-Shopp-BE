import { MigrationInterface, QueryRunner } from "typeorm";

export class isActive1672827889329 implements MigrationInterface {
    name = 'isActive1672827889329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "is_active" boolean DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_230b925048540454c8b4c481e1c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_active"`);
    }

}
