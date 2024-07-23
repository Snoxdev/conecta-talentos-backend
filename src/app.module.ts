import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EmpresasController } from './empresas/empresas.controller';
import { EmpresasService } from './empresas/empresas.service';
import { OfertaLaboralController } from './oferta-laboral/oferta-laboral.controller';
import { OfertaLaboralService } from './oferta-laboral/oferta-laboral.service';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController, EmpresasController, OfertaLaboralController],
  providers: [AppService, EstudiantesService, EmpresasService, OfertaLaboralService],
})
export class AppModule {}
