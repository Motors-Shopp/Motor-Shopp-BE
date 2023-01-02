import { MigrationInterface, QueryRunner } from "typeorm";

export class usersMigrations1672674415098 implements MigrationInterface {
    name = 'usersMigrations1672674415098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cellphone" character varying NOT NULL, "birthdate" TIMESTAMP NOT NULL, "bio" character varying NOT NULL, "is_seller" boolean NOT NULL, "is_client" boolean NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
