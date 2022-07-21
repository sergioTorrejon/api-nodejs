import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Base extends BaseEntity {
  
  @Column({ default: true })
  active: boolean;
  
  @Column({name:'user_create',default:'admin'})
  userCreate: string;

  @CreateDateColumn({name:'date_create'})
  dateCreate: Date;
  
  @Column({name:'user_update', nullable:true})
  UserUpdate: string;

  @UpdateDateColumn({name:'date_update'})
  dateUpdate: Date;
}
