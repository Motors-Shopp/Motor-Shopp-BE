import { MigrationInterface, QueryRunner } from "typeorm";

export class commentMigrations1672675408704 implements MigrationInterface {
    name = 'commentMigrations1672675408704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_user" character varying NOT NULL, "picture_user" character varying NOT NULL, "comment" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
