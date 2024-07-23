import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/Models/empresa';
import { ofertaLaboral } from 'src/Models/ofertaLaboral';

@Injectable()
export class OfertaLaboralService {


    private ofertaLaborales: ofertaLaboral[] = [];

  
    nuevaOfertaLaboral(ofertaLaboral:ofertaLaboral): void{
        ofertaLaboral.id = this.ofertaLaborales.length + 1;
        this.ofertaLaborales.push(ofertaLaboral);
    }    
    
    obtenerOfertaLaboralPorId(ide: number): ofertaLaboral {
        for(let i = 0; i < this.ofertaLaborales.length; i++){
            if(this.ofertaLaborales[i].id == ide){
                return this.ofertaLaborales[i];
            }
        }
        return null;
    }
    
    obtenerOfertasLaborales(): ofertaLaboral[] {
        return this.ofertaLaborales;
    }

        
    borrarOfertaLaboral(ide: number): void {
        for(let i = 0; i < this.ofertaLaborales.length; i++){
            if(this.ofertaLaborales[i].id == ide){
                this.ofertaLaborales.splice(i, 1);
                for(let j = ide; j <= this.ofertaLaborales.length; j++){
                    this.ofertaLaborales[j-1].id = j;
                }
            }
        }
    }
}
