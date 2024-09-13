import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'awb' })
export class Awb extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  product: string;

  @Column({
    type: DataType.INTEGER
  })
  price: number;

  @Column({
    field: "created_at",
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    field: "updated_at",
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    // onUpdate: DataType.NOW,
  })
  updatedAt: Date;
}


