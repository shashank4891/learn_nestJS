import { Test, TestingModule } from '@nestjs/testing';
import { AwbController } from './awb.controller';

describe('AwbController', () => {
  let controller: AwbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwbController],
    }).compile();

    controller = module.get<AwbController>(AwbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
