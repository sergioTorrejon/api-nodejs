import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AuditBase } from '../../../../common/models/base/audit.base.entity';

@Entity()
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn({type:'int4'})
  @IsNumber()
  id: number;

  @Column()
  nameConfig: string;

  @Column()
  descriptionConfig: string;

  @Column({ default: true })
  active: boolean;

  @Column(type => AuditBase )
  audit_:AuditBase;

}
