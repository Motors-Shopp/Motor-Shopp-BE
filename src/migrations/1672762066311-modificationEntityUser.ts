import { MigrationInterface, QueryRunner } from "typeorm";

export class modificationEntityUser1672762066311 implements MigrationInterface {
    name = 'modificationEntityUser1672762066311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" TIMESTAMP NOT NULL`);
    }

}
