import { Body, Delete, Get, Injectable, Param, Post } from '@nestjs/common';
import { Estudiante } from "src/Models/estudiantes"

@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[] = [];
    private email: string[] = [];

  
    nuevoEstudiante(estudiante:Estudiante): void{
        if(this.estudiantes.length < 1){
            estudiante.id = this.estudiantes.length + 1;
            this.estudiantes.push(estudiante);
            this.email.push(estudiante.email);
        }else{
          if(this.email.indexOf(estudiante.email) == -1){
            estudiante.id = this.estudiantes.length + 1;
            this.estudiantes.push(estudiante);
            this.email.push(estudiante.email);
          }else{
            console.log("Este email ya se encuentra registrado");
          }
        }
    }    
    
    obtenerEstudiantePorId(ide: number): Estudiante {
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == ide){
                return this.estudiantes[i];
            }
        }
        return null;
    }
    
    obtenerEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }
    
    
    borrarEstudiante(ide: number): void {
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == ide){
                this.estudiantes.splice(i, 1);
                this.email.splice(i, 1);
                for(let j = ide; j <= this.estudiantes.length; j++){
                    this.estudiantes[j-1].id = j;

                }
            }
        }
    }

}
