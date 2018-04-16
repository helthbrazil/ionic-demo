import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import 'rxjs/add/operator/map';

declare var cordova: any; //GLOBAL
declare var window: any;
declare var document: any;
@Injectable()
export class BD {
    private readonly dataBase: string = 'example.db';
    private db: SQLiteObject;
    location: string;
    public sqlitePorter: SQLitePorter

    constructor() {
        // this.incializarPath();
        this.sqlitePorter = new SQLitePorter();
        this.openConnection();
    }

    public dropDataBase(callbackSucess, callbackError) {
        this.sqlitePorter.wipeDb(this.db).then(response => {
            callbackSucess(response);
        }).catch(error => {
            callbackError(error);
        });
    }

    importSqlToDb(sql) {
        this.sqlitePorter.importSqlToDb(this.db, sql).then().catch();
    }

    public exportDbToSql(callback) {

        this.sqlitePorter.exportDbToSql(this.db).then(response => { callback({ status: 200, response: response }) }).catch(error => { callback({ status: 500, response: error }) });
    }

    public exportDbToJSON(callbackSucess, callbackError) {
        this.sqlitePorter.exportDbToJson(this.db).then(response => {
            callbackSucess({
                status: 200,
                response: response
            });
        }).catch(error => {
            callbackError({
                status: 500,
                response: error
            });
        });
    }

    private incializarPath() {
        window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, response => {
            console.log(response);

        }, error => {
            console.error(error);

        });
    }

    public importJsonToDb(json) {
        this.sqlitePorter.importJsonToDb(this.db, json);
    }

    /**
     * Método responsável por abrir conexão com o banco de dados do dispositivo*/
    protected openConnection() {
        let sqlite: SQLite;
        sqlite = new SQLite();
        sqlite.create({
            name: this.dataBase,
            location: 'default'
        }).then((db: SQLiteObject) => {
            this.db = db;
        }).catch(e => console.log(e));
    }

    /**
     * Método padrão para executar scripts SQLite
     * os parâmetros seguem o schema de exemplo: [data.name, data.age]
     * 
     * */

    protected open(callbackSucess, callbackError) {
        this.db.open().then(() => {
            callbackSucess();
        }).catch(() => {
            callbackError();
        });
    }

    protected close(callbackSucess, callbackError) {
        this.db.close().then(() => {
            callbackSucess();
        }).catch(() => {
            callbackError();
        });
    }

    protected executeQuery(query: string, params: Object, callbackSucess, callbackError) {
        if (this.db) {
            this.db.executeSql(query, params).then((resultado) => {
                console.log(resultado);
                resultado.query = query;
                callbackSucess(resultado);
            }, (err) => {
                console.error(err);
                err.query = query;
                callbackError(err);
            });
        } else {
            console.error("instância da base de dados indisponivel");
            this.openConnection();
            setTimeout(() => {
                this.executeQuery(query, params, callbackSucess, callbackError);
            }, 500);
        }
    }

    /*     protected executeQuery(query: string, params: Object, callbackSucess, callbackError) {
            if (this.db) {
                this.open(sucesso => {
                    console.log("conexao aberta");
                    this.db.executeSql(query, params).then((resultado) => {
                        console.log(resultado);
                        resultado.query = query;
                        this.close(sucess => {
                            console.log("conexao fechada");
                        }, error => {
                            console.log("Erro ao fechar conexão");
                        });
                        callbackSucess(resultado);
                    }, (err) => {
                        console.error(err);
                        err.query = query;
                        this.close(sucess => {
                            console.log("conexao fechada");
                        }, error => {
                            console.log("Erro ao fechar conexão");
                        });
                        callbackError(err);
                    });
                }, error => {
                    console.log("Erro ao abrir conexão");
                });
            }
        } */
}