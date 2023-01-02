import { MigrationInterface, QueryRunner } from "typeorm";

export class relationshipComments1672680459732 implements MigrationInterface {
    name = 'relationshipComments1672680459732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "name_user"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "picture_user"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "vehicleId" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "vehicleId"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "picture_user" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "name_user" character varying NOT NULL`);
    }

}
