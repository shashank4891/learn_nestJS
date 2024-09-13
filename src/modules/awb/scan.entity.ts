import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({ tableName: "scan"})
export class Scan extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    scan_id:number;

    @Column({
        type: DataType.STRING
    })
    product:string;

    @Column
    place:string;

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