import { Body, Delete, Get, Injectable, Param, Post } from '@nestjs/common';
import { Estudiante } from "src/Models/estudiantes"

@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[] = [];

  
    nuevoEstudiante( @Body() estudiante:Estudiante): void{
        this.estudiantes.push(estudiante);
    }    
    
    obtenerEstudiantePorId( @Param("id") ide: number): Estudiante {
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == ide){
                return this.estudiantes[i];
            }
        }
        return null;
    }
    
    obtenerEstudiante(): Estudiante[] {
        return this.estudiantes;
    }
    
    
    borrarEstudiante( @Param("id") ide: number): void {
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == ide){
                this.estudiantes.splice(i - 1, 1);
            }
        }
    }

}
