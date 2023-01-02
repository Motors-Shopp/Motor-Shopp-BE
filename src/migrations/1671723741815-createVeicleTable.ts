import { MigrationInterface, QueryRunner } from "typeorm";

export class createVeicleTable1671723741815 implements MigrationInterface {
    name = 'createVeicleTable1671723741815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "year" character varying NOT NULL, "kilometers" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "typeOfVehicle" character varying NOT NULL, "img" character varying NOT NULL, "fristImg" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
