import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  AuditBase,
} from '../../../../../../shared/models/classes/base/audit.base.entity';

@Entity("settings", {"schema": "config"})
export class Setting extends BaseEntity {
  @PrimaryGeneratedColumn({type:'int4'})
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
