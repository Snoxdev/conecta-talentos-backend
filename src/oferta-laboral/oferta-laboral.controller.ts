import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ofertaLaboral } from 'src/Models/ofertaLaboral';
import { OfertaLaboralService } from './oferta-laboral.service';
import { Empresa } from 'src/Models/empresa';

@Controller('oferta-laboral')
export class OfertaLaboralController {


    constructor (private readonly ofertaLaboralService:OfertaLaboralService){
    
    }
    
    @Post()
    nuevaOfertaLaboral(@Body() ofertaLaboral:ofertaLaboral): void{
        this.ofertaLaboralService.nuevaOfertaLaboral(ofertaLaboral);
    }
    
        
    @Get(":id")
    obtenerOfertaLaboralPorId( @Param("id") ide: number): ofertaLaboral {
        return this.ofertaLaboralService.obtenerOfertaLaboralPorId(ide);
    }
    
    @Get()
    obtenerOfertasLaborales(@Query('empresa') empresa:Empresa, @Query('estado') estado: string): ofertaLaboral[] {

        if(empresa){
            console.log("Filtro por Empresa");
        }
        if(estado){
            console.log("Filtro por estado");
        }

        return this.ofertaLaboralService.obtenerOfertasLaborales();
    }
    
    @Delete(":id")
    borrarOfertaLaboral( @Param("id") ide: number): void {
        this.ofertaLaboralService.borrarOfertaLaboral(ide);
    }
}
