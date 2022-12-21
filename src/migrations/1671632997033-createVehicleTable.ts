import { MigrationInterface, QueryRunner } from "typeorm";

export class createVehicleTable1671632997033 implements MigrationInterface {
    name = 'createVehicleTable1671632997033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "model" character varying NOT NULL, "localization" character varying NOT NULL, "year" integer NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, "img" character varying NOT NULL, "galery" character varying NOT NULL, "kilometers" integer NOT NULL, "price" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
