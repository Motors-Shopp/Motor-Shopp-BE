import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('vehicles')
class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    title: string

    @Column()
    year: string

    @Column()
    kilometers: string

    @Column()
    price: string

    @Column()
    description: string

    @Column()
    typeOfVehicle: string

    @Column()
    img: string

    @Column()
    fristImg: string

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