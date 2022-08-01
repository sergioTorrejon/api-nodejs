import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  AuditBase,
} from '../../../../../../shared/models/base/audit.base.entity';

@Entity("setting", {"schema": "config"})
export class Setting extends BaseEntity {
  @PrimaryGeneratedColumn({type:'int4'})
  @IsNumber()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ default: true })
  active: boolean;

  @Column(type => AuditBase )
  audit_:AuditBase;
}
