import { Injectable } from '@angular/core';
import { File } from 'ionic-native';
import 'rxjs/add/operator/map';

declare var cordova: any;

@Injectable()
export class FileUtil {

    constructor() { }

    checkDir(path: string, dir: string, callbackSucess, callbackError) {
        File.checkDir(path, dir).then(response => {
            console.log(response);
            callbackSucess(response);
        }).catch(err => {
            console.error(err);
            callbackError(err);
        });
    }

    checkFile(path: string, filename: string, callbackSucess, callbackError) {
        File.checkFile(path, filename).then(response => {
            callbackSucess(response);
        }).catch(err => {
            callbackError(err);
        });
    }

    createFile(path: string, filename: string, replace: boolean, callbackSucess, callbackError) {
        File.createFile(path, filename, replace).then(file => {
            console.log(file);
            callbackSucess(file);
        }).catch(err => {
            console.error(err);
            callbackError(err);
        });
    }

    writeExistingFile(path: string, fileName: string, text: string, callbackSucess, callbackError) {
        //const fs: string = cordova.file.dataDirectory;
        File.writeExistingFile(path, fileName, text).then(response => {
            console.log(response);
            callbackSucess(response);
        }).catch(err => {
            console.error(err);
            callbackError(err);
        });
    }

    readAsDataURL(path: string, file: string, callbackSucess, callbackError) {
        File.readAsDataURL(path, file).then((response) => {
            callbackSucess(response)
        }
        ).catch((error) => {
            callbackError(error)
        }
            );
    }

    removeFile(path, file, callback) {
        const fs: string = path;
        File.removeFile(fs, file).then(response => {
            callback(response);
        }).catch(err => {
            callback(err);
        });
    }

     writeFile(path: string, filename: string, text: string, options: any, callbackSucess, callbackError, internal: boolean) {
        let fs: string;
        if (internal)
            fs = cordova.file.dataDirectory;
        else
            fs = path;
        File.writeFile(fs, filename, text).then(file => {
            callbackSucess(file);
        }).catch(err => {
            callbackError(err);
        });
    } 

    readAsText(path, file, callbackSucess, callbackError) {
        const fs: string = cordova.file.dataDirectory;
        File.readAsText(fs, file).then(file => {
            callbackSucess(file);
        }).catch(err => {
            callbackError(err);
        });
    }

    createDir(path: string, dirName: string, replace: boolean, callbackSucess, callbackError) {
        File.createDir(path, dirName, replace).then(directoryEntry => {
            callbackSucess(directoryEntry);
        }).catch(err => {
            callbackError(err);
        });
    }

    getFile(directory, fileName, flags, callbackSucess, callbackError) {
        const fs: string = cordova.file.dataDirectory;
        File.resolveDirectoryUrl(fs).then(directoryEntry => {
            File.getFile(directoryEntry, fileName, { create: false }).then(file => {
                callbackSucess(file);
            }).catch(err => {
                callbackError(err);
            });
        }).catch(err => {
            callbackError(err);
        });

    }
}
