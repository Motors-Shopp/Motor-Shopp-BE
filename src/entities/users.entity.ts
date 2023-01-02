import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Address from "./address.entity";
import Vehicle from "./vehicles.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  cellphone: string;

  @Column()
  birthdate: Date;

  @Column()
  bio: string;

  @Column()
  is_seller: boolean;

  @Column()
  is_client: boolean;

  @Column()
  password: string;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @JoinTable()
  vehicles: Vehicle[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;
