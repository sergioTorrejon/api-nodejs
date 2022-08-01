import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AuditBase {
  @Column({name:'user_create',default:'system'})
  userCreate: string;

  @CreateDateColumn({name:'date_create'})
  dateCreate: Date;
  
  @Column({name:'user_update', nullable:true})
  UserUpdate: string;

  @UpdateDateColumn({name:'date_update'})
  dateUpdate: Date;
}
