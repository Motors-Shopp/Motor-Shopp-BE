import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name_user: string;

  @Column()
  picture_user: string;

  @Column()
  comment: string;

  @CreateDateColumn()
  date: Date;
}

export default Comment;
