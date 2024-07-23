import { Test, TestingModule } from '@nestjs/testing';
import { OfertaLaboralController } from './oferta-laboral.controller';

describe('OfertaLaboralController', () => {
  let controller: OfertaLaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertaLaboralController],
    }).compile();

    controller = module.get<OfertaLaboralController>(OfertaLaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
