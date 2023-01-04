import { MigrationInterface, QueryRunner } from "typeorm";

export class modificationEntityUserTwo1672805683152 implements MigrationInterface {
    name = 'modificationEntityUserTwo1672805683152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "complement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "complement" SET NOT NULL`);
    }

}
