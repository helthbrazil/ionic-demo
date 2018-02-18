import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Injectable()
export class Loading {
    private response: string;
    private loader: any;
    private loadingCtrl: LoadingController;

    // CONSTANTES DOS TIPOS
    static readonly DEFAULT = 'default';
    static readonly IOS = 'ios';
    static readonly DOTS = 'dots';
    static readonly BUBBLES = 'bubbles';
    static readonly CIRCLES = 'circles';
    static readonly CRESCENT = 'crescent';

    constructor(loading: LoadingController) {
        this.loadingCtrl = loading;
    }

    /**
     * método responsável por abrir uma tela de loading.
     * O parâmetro tipoLoading altera o tipo do loading apresentado na tela. 
     * Os valores do parâmetro são disponibilizados através das constante estáticas da
     * classe
     * @param mensagem
     * @param tipoLoading
     * @param conteudo
     * */
    showLoading(mensagem: string, tipoLoading: string) {

        this.loader = this.loadingCtrl.create({
            content: mensagem,
            dismissOnPageChange: true,
            spinner: tipoLoading
        });
        this.loader.present();
    }
    /**
     * método responsável por fechar uma tela de loading
     * */
    dismissLoading() {
        if (this.loader) {
            this.loader.dismiss();
        }
    }

    presentLoadingCustom() {
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `            
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">        
         <img style="margin-top: 10px; display: block; margin: 0 auto;"  width="130" height="65" src="assets/svg/logo_intergado_animado.svg" />
        </div>
        <ion-label text-capitalize style="display: flex; margin: auto" color="primary">processando</ion-label>
      </div>`,
            duration: 5000
        });
        loading.present();
    }

}
