import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import User from "./users.entity";
import Vehicle from "./vehicles.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  comment: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Vehicle, { eager: true })
  @JoinColumn()
  vehicle: Vehicle;

  @CreateDateColumn()
  date: Date;
}

export default Comment;
