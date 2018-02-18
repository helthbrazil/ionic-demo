import { Injectable } from '@angular/core';

declare var Zeep: any;
declare var cordova: any;

@Injectable()
export class ZipUtil {

    public zipFile(name: string, diretorio, diretorioZip, callbackSucess, callbackError) {
        let source: string = diretorio;
        let destination: string = diretorioZip;

        destination += name;
        Zeep.zip({
            from: source,
            to: destination
        }, sucess => {
            console.log('zip success!');
            callbackSucess(destination);
        }, error => {
            console.log('zip error: ', error);
            callbackError(error);
        });
    }


    public unZip() {
        /*       Zeep.unzip({
                  from: this.source,
                  to: this.destination
              }, function () {
                  console.log('unzip success!');
              }, function (e) {
                  console.log('unzip error: ', e);
              }); */
    }



}