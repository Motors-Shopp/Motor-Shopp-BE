import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('vehicles')
class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    model: string

    @Column()
    localization: string

    @Column()
    year: number

    @Column()
    description: string

    @Column()
    type: string

    @Column()
    img: string

    @Column()
    galery: string

    @Column()
    kilometers: number

    @Column()
    price: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
export default Vehicle