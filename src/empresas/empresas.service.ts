import { Injectable } from '@nestjs/common';
import { Empresa } from "src/Models/empresa";

@Injectable()
export class EmpresasService {

    private empresas: Empresa[] = [];
    private nombreEmpresas: string[] = [];

  
    nuevaEmpresa(empresa:Empresa): void{
        if(this.empresas.length < 1){
            empresa.id = this.empresas.length + 1;
            this.empresas.push(empresa);
            this.nombreEmpresas.push(empresa.nombre);
        }else{
            if(this.nombreEmpresas.indexOf(empresa.nombre) == -1){
                empresa.id = this.empresas.length + 1;
                this.empresas.push(empresa);
                this.nombreEmpresas.push(empresa.nombre);
            }else{
                console.log("Esta empresa ya existe en el sistema");
            }
        }
        
    }    
    
    obtenerEmpresaPorId(ide: number): Empresa {
        for(let i = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == ide){
                return this.empresas[i];
            }
        }
        return null;
    }
    
    obtenerEmpresas(): Empresa[] {
        return this.empresas;
    }
    
    
    borrarEmpresa(ide: number): void {
        for(let i = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == ide){
                this.empresas.splice(i, 1);
                this.nombreEmpresas.splice(i, 1);
                for(let j = ide; j <= this.empresas.length; j++){
                    this.empresas[j-1].id = j;

                }
            }
        }
    }




}
