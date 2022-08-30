import {
  Column,
  CreateDateColumn,
  Entity
} from 'typeorm';

@Entity()
export class AuditBase {
  @Column({name:'user_create',default:'system'})
  userCreate: string;

  @CreateDateColumn({name:'date_create'})
  dateCreate: Date;
  
  @Column({name:'user_update', nullable:true})
  UserUpdate: string;

  @CreateDateColumn({name:'date_update'})
  dateUpdate: Date;
}
