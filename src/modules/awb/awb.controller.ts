import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AwbService } from './awb.service';

@Controller('awb')
export class AwbController {
    constructor(private readonly awbService: AwbService) {}

    @Post('/create')
    async createBulk(@Body() payload: any){
        try {
            console.log(payload);
            await this.awbService.transactionPayload(payload);

            return {
                message: 'Transaction successful. AWB, Scan, and Invoice records created.',
                success: true,
              };

        } catch (error) {
            throw new BadRequestException(`Transaction failed: ${error.message}`);
        }
    }
}
