import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'invoice' })
export class Invoice extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  invoice_no: number;

  @Column
  quantity: number;

  @Column
  payment: string;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    // onUpdate: DataType.NOW,
  })
  updatedAt: Date;
}
