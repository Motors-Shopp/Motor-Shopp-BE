import { MigrationInterface, QueryRunner } from "typeorm";

export class relationshipUserVehicle1672676940829 implements MigrationInterface {
    name = 'relationshipUserVehicle1672676940829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "sellerId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_61e24c4e582f894144817a4712a" FOREIGN KEY ("sellerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_61e24c4e582f894144817a4712a"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "sellerId"`);
    }

}
