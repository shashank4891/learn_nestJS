import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Awb } from './awb.entity';
import { Invoice } from './invoice.entity';
import { Scan } from './scan.entity';

@Injectable()
export class AwbService {
    constructor(
        @InjectModel(Awb)
        private readonly awbModel: typeof Awb,
    
        @InjectModel(Invoice)
        private readonly invoiceModel: typeof Invoice,
    
        @InjectModel(Scan)
        private readonly scanModel: typeof Scan,
        // private readonly sequelize: Sequelize,
      ) {}
    
      async transactionPayload(payload: any): Promise<void> {
        const transaction = await this.awbModel.sequelize.transaction();
    
        try {
          const awbBulk = await this.awbModel.create(payload.awbData, {
            transaction,
          });
    
          const scanBulk = await this.scanModel.create(payload.scanData, {
            transaction,
    
          });
    
          const invoiceBulk = await this.invoiceModel.create(
           payload.invoiceData,
            { transaction, },
          );
    
          await transaction.commit();
          console.log('Transaction Committed');
        } catch (error) {
          await transaction.rollback();
          console.error('Transaction rollback', error);
          throw error;
        }
      }
}
