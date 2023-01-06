import { MigrationInterface, QueryRunner } from "typeorm";

export class joinVehicle1672936281811 implements MigrationInterface {
    name = 'joinVehicle1672936281811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" ADD "vehiclesId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_97b77f328421aeaeefae4f78f86" FOREIGN KEY ("vehiclesId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_97b77f328421aeaeefae4f78f86"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "vehiclesId"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "active"`);
    }

}
