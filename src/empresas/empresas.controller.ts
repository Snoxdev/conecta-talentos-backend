import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Empresa } from "src/Models/empresa";
import { EmpresasService } from './empresas.service';

@Controller('empresas')
export class EmpresasController {

constructor (private readonly empresaServices: EmpresasService){

    
}


    @Post()
nuevoEstudiante(@Body() empresa:Empresa): void{
    this.empresaServices.nuevaEmpresa(empresa);
}

    
@Get(":id")
obtenerEstudiantePorId( @Param("id") ide: number): Empresa {
    return this.empresaServices.obtenerEmpresaPorId(ide);
}

@Get()
obtenerEmpresas(): Empresa[] {
    return this.empresaServices.obtenerEmpresas();
}

@Delete(":id")
borrarEmpresa( @Param("id") ide: number): void {
    this.empresaServices.borrarEmpresa(ide);
}
}
