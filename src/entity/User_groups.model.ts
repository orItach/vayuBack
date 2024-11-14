import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,PrimaryColumn  } from "typeorm"
import { Users } from "./Users.model"

@Entity()
export class User_groups extends BaseEntity{
    @Column()
    user_id!: number

    @PrimaryColumn()
    group_id!: number
}
