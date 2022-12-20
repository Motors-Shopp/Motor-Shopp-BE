import { MigrationInterface, QueryRunner } from "typeorm";

export class createVehicleTable1671567749686 implements MigrationInterface {
    name = 'createVehicleTable1671567749686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "model" character varying NOT NULL, "localization" character varying NOT NULL, "year" integer NOT NULL, "plate" character varying NOT NULL, "kilometers" integer NOT NULL, "price" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
