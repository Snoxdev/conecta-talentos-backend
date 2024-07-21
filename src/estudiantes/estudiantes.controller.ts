import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiante } from "src/Models/estudiantes"
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {

constructor (private readonly estudianteServices:EstudiantesService){
    
}

@Post("estudiantes")
nuevoEstudiante(@Body() estudiante:Estudiante): void{
    this.estudianteServices.nuevoEstudiante(estudiante);
}

    
@Get(":id")
obtenerEstudiantePorId( @Param("id") ide: number): Estudiante {
    return this.estudianteServices.obtenerEstudiantePorId(ide);
}

@Get("estudiantes")
obtenerEstudiante(): Estudiante[] {
    return this.estudianteServices.obtenerEstudiante();
}

@Delete(":id")
borrarEstudiante( @Param("id") ide: number): void {
    this.estudianteServices.borrarEstudiante(ide);
}


}