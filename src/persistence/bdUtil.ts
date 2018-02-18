import { Login } from './../entity/login';
import { LoginLocalStorage } from './../localStorage/login';
import { Raca } from './../entity/racas';
import { ProdutoPrincipioAtivo } from './../entity/produtoPrincipioAtivo';
import { PrincipioAtivo } from './../entity/principioAtivo';
import { ProdutoDao } from './../dao/produtoDao';
import { Produto } from './../entity/produto';
import { UnidadeDao } from './../dao/unidadeDao';
import { Unidade } from './../entity/unidade';
import { ClassificacaoProdutoDao } from './../dao/classificacaoProdutoDao';
import { Classificacao } from './../entity/classificacao';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import 'rxjs/add/operator/map';
import { BD } from '../persistence/bd';

@Injectable()
export class BDUtil extends BD {
    public tablesCreate: Array<string>;
    constructor() {
        super();
        this.tablesCreate = new Array<string>();
    }

    /**
     * Método utilizado para a criação das tabelas a partir de um array de string (CONSULTAS).     * 
     * 
     * */
    createTables() {
        let loginLocalStorage = new LoginLocalStorage();
        let login = loginLocalStorage.get();
        if (login == undefined || login == null) {
            login = new Login(false, false);
            loginLocalStorage.save(login);
            this.createScript();
            setTimeout(() => {
                this.execute(this.tablesCreate, true);
                let login = new Login(false, true);
                login.$criacaoTabelasCompletadas = true;
                let loginLocalStorage = new LoginLocalStorage();
                loginLocalStorage.save(login);
            }, 500)
        } else {
            console.log("Todas tabelas já criadas");
        }
    }

    destroyTables() {
        let tables = new Array<string>();
        this.execute(tables, false);
    }

    execute(script: Array<string>, create: boolean) {
        let lengthOfTables = script.length;
        for (var i = 0; i < lengthOfTables; i++) {
            this.executeQuery(script[i], {}, (response) => {
                console.log(response);
                if (create)
                    console.log('tabela criada com sucesso');
                else
                    console.log('tabela excluída com sucesso');
            }, (error) => {
                console.error(error);
                console.log('erro ao criar tabela');
            });
        }

        setTimeout(() => {
        /*     this.initClassificacoes();
            this.initSexo(); */
        }, 100);

        // PREENCHIMENTO TABELAS
        /*    this.initClassificacoes();
           this.initUnidades();
           this.initProdutos(); */
    }

    

    salvarRacasNobanco(racas: Array<Raca>) {
        let query = "INSERT INTO raca (id, nome) VALUES ";
        let params = [];
        let lengthOfRacas = racas.length;
        for (let i = 0; i < lengthOfRacas; i++) {
            query += "(?,?),";
            params.push(racas[i].$id, racas[i].$nome);
        }

        query = query.substring(0, query.length - 1);

        this.executeQuery(query, params, response => {
            console.log("Raças cadastradas com sucesso");
        }, error => {

        });
    }

    private saveRacas(racas: Array<Raca>) {
        var limit = 200;
        if (racas.length < limit) {
            this.salvarRacasNobanco(racas);
        } else {
            let lengthOfProdutos = racas.length;
            let repeticoes = parseInt((lengthOfProdutos / limit).toString());
            repeticoes++;

            var init = 0;
            var end = limit - 1;

            for (let i = 0; i < repeticoes; i++) {
                let lista = racas.slice(init, (end + 1));
                this.salvarRacasNobanco(lista);
                init = init += limit;
                if (i == (repeticoes - 2)) {
                    end = racas.length;
                } else {
                    end = init + (limit - 1);
                }
            }

        }
    }

    private executeSave(produtos: Array<Produto>) {
        let query = "INSERT INTO farmacia_produto (id, nome, id_farmacia_classe, id_unidade_medida) VALUES ";
        let params = [];
        let lengthOfProdutos = produtos.length;
        for (let i = 0; i < lengthOfProdutos; i++) {
            query += "(?,?,?,?),";
            params.push(produtos[i].$id, produtos[i].$nome, produtos[i].$idFarmaciaClasse, produtos[i].$idUnidadeMedida);
        }
        query = query.substring(0, query.length - 1);

        this.executeQuery(query, params, response => {
            console.log("produtos cadastrados com sucesso");
        }, error => {
            console.error(error);
        });
    }

    saveList(listaClassificacao: Array<Classificacao>, callbackSucess, callbackError) {
        let lengthOfList = listaClassificacao.length;
        let params = [];
        let query = "INSERT INTO farmacia_classe (cod_classificacao, descricao) " +
            " VALUES ";
        for (let i = 0; i < lengthOfList; i++) {
            query += " (?,?),";
            params.push(listaClassificacao[i].$codClassificacao, listaClassificacao[i].$descricao);
        }

        query = query.substring(0, query.length - 1);

        this.executeQuery(query, params, response => {
            callbackSucess(response);
        }, error => {
            console.error(error);
            callbackError(error);
        });
    }

    public saveProdutos(produtos: Array<Produto>, callbackSucess, callbackError) {
        var limit = 200;
        if (produtos.length < limit) {
            this.executeSave(produtos);
        } else {
            let lengthOfProdutos = produtos.length;
            let repeticoes = parseInt((lengthOfProdutos / limit).toString());
            repeticoes++;

            var init = 0;
            var end = limit - 1;

            for (let i = 0; i < repeticoes; i++) {
                let lista = produtos.slice(init, (end + 1));
                this.executeSave(lista);
                init = init += limit;
                if (i == (repeticoes - 2)) {
                    end = produtos.length;
                    setTimeout(() => {
                     /*    this.initAssociacaoProdutosPrincipiosAtivos(); */
                    }, 100);
                } else {
                    end = init + (limit - 1);
                }
            }

        }
    }

    private savePrincipios(principios: Array<PrincipioAtivo>) {
        let query = "INSERT INTO farmacia_principio_ativo (id, nome) VALUES ";
        let params = [];
        let lengthOfPrincipios = principios.length;
        for (let i = 0; i < lengthOfPrincipios; i++) {
            query += "(?,?),";
            params.push(principios[i].$cod, principios[i].$nome);
        }
        query = query.substring(0, query.length - 1);

        this.executeQuery(query, params, response => {
            console.log("Principios ativos cadastrados com sucesso");
        }, error => {
            console.error(error);
        });
    }

    saveAssociacaoPrincipiosAtivos(listaDeAssociacao: Array<ProdutoPrincipioAtivo>) {
        let query = "INSERT INTO farmacia_produto_farmacia_principio_ativo (id_farmacia_produto ,id_farmacia_principio_ativo) VALUES ";
        let params = [];

        let lengthOfAssociacoes = listaDeAssociacao.length;
        for (let i = 0; i < lengthOfAssociacoes; i++) {
            query += "(?,?),";
            params.push(listaDeAssociacao[i].$idFarmaciaProduto,
                listaDeAssociacao[i].$idFarmaciaPrincipioAtivo);
        }

        query = query.substring(0, query.length - 1);

        this.executeQuery(query, params, response => {
            console.log("Associações cadastradas com sucesso");
        }, error => {
            console.error(error);
        });
    }

    saveProdutosPrincipiosAtivos(listaDeAssociacao: Array<ProdutoPrincipioAtivo>) {
        var limit = 200;
        if (listaDeAssociacao.length < limit) {
            this.saveAssociacaoPrincipiosAtivos(listaDeAssociacao);
        } else {
            let lengthOfPrincipios = listaDeAssociacao.length;
            let repeticoes = parseInt((lengthOfPrincipios / limit).toString());
            repeticoes++;

            var init = 0;
            var end = limit - 1;

            for (let i = 0; i < repeticoes; i++) {
                let lista = listaDeAssociacao.slice(init, (end + 1));
                this.saveAssociacaoPrincipiosAtivos(lista);
                init = init += limit;
                if (i == (repeticoes - 2)) {
                    end = listaDeAssociacao.length;
                } else {
                    end = init + (limit - 1);
                }
            }

        }
    }

    public savePrincipiosAtivos(principios: Array<PrincipioAtivo>) {
        var limit = 200;
        if (principios.length < limit) {
            this.savePrincipios(principios);
        } else {
            let lengthOfPrincipios = principios.length;
            let repeticoes = parseInt((lengthOfPrincipios / limit).toString());
            repeticoes++;

            var init = 0;
            var end = limit - 1;

            for (let i = 0; i < repeticoes; i++) {
                let lista = principios.slice(init, (end + 1));
                this.savePrincipios(lista);
                init = init += limit;
                if (i == (repeticoes - 2)) {
                    end = principios.length;
                } else {
                    end = init + (limit - 1);
                }
            }

        }
    }

    public save(unidades: Array<Unidade>, callbackSucess, callbackError) {
        let lengthOfList = unidades.length;
        let query = "INSERT INTO unidade_medida (id, nome) VALUES ";
        let params = [];
        for (let i = 0; i < lengthOfList; i++) {
            query += "(?,?),";
            params.push(unidades[i].$id, unidades[i].$nome);
        }
        query = query.substring(0, query.length - 1);
        this.executeQuery(query, params, response => {
            callbackSucess(response);
        }, error => {
            callbackError(error);
        });
    }
   
    private createScript() {

        //CREATE INDEX IF NOT EXISTS index_name ON table_name (column_name); 

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS raca(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(200) NOT NULL
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS organizacao(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                proprietario VARCHAR(100),
                email VARCHAR(100)
            )
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS fazenda(
                id INTEGER PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                organizacao_id NOT NULL,
                email VARCHAR(200),
                estado VARCHAR(60),
                cidade VARCHAR(200),
                FOREIGN KEY(organizacao_id) REFERENCES organizacao(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS fazenda_terceiro(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER UNIQUE,
                nome VARCHAR(100) NOT NULL,
                cnpj VARCHAR(100),
                email VARCHAR(200),
                estado_id INTEGER NOT NULL,
                estado_nome VARCHAR,
                cidade VARCHAR(200),
                data_criacao DATE NOT NULL,
                organizacao_id INTEGER NOT NULL,
                status INTEGER(1) NOT NULL,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(organizacao_id) REFERENCES organizacao(id)
            )    
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS fazenda_raca_preferida(
                fazenda_id INTEGER NOT NULL,
                raca_id INTEGER NOT NULL,
                FOREIGN KEY(fazenda_id) REFERENCES fazenda(id),
                FOREIGN KEY(raca_id) REFERENCES raca(id)
            )            
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS farmacia_classe (
                cod_classificacao INTEGER PRIMARY KEY,
                descricao VARCHAR(200) NOT NULL, 
                status INTEGER(1)
            )        
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS unidade_medida (
                id INTEGER PRIMARY KEY,
                nome VARCHAR(200) NOT NULL
            )        
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS farmacia_principio_ativo (
                id INTEGER(20) PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                status INTEGER(1)
            )
        `);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS farmacia_produto (
                id INTEGER PRIMARY KEY,
                nome VARCHAR(200) NOT NULL,
                id_farmacia_classe INTEGER NOT NULL,
                id_unidade_medida INTEGER NOT NULL,
                status INTEGER(1),
                FOREIGN KEY(id_farmacia_classe) REFERENCES farmacia_classe(cod_classificacao),
                FOREIGN KEY(id_unidade_medida) REFERENCES unidade_medida(id)
            )
        `);

        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS farmacia_produto_nome_index ON farmacia_produto (nome)`);
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS farmacia_produto_id_farmacia_classe_index ON farmacia_produto (id_farmacia_classe)`);
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS farmacia_produto_id_unidade_medida_index ON farmacia_produto (id_unidade_medida)`);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS farmacia_produto_farmacia_principio_ativo(
                id_farmacia_produto INTEGER(20) NOT NULL,
                id_farmacia_principio_ativo INTEGER(20) NOT NULL,
                FOREIGN KEY(id_farmacia_produto) REFERENCES farmacia_produto(id),
                FOREIGN KEY(id_farmacia_principio_ativo) REFERENCES farmacia_principio_ativo(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS fazenda_produto_preferido(
            fazenda_id INTEGER NOT NULL,
            produto_id INTEGER NOT NULL,
            FOREIGN KEY(fazenda_id) REFERENCES fazenda(id),
            FOREIGN KEY(produto_id) REFERENCES farmacia_produto(id)
        )            
        `);

        this.tablesCreate.push(`CREATE UNIQUE INDEX IF NOT EXISTS unique_products ON fazenda_produto_preferido(fazenda_id,produto_id)`);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS gta(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                numero VARCHAR(100) NOT NULL,
                descricao VARCHAR(200),
                fazenda_origem INTEGER,
                fazenda_destino INTEGER,
                fazenda_terceiro_id INTEGER,
                data DATE NOT NULL,
                data_criacao DATE NOT NULL,
                tipo INTEGER(1) NOT NULL,
                quantidade_de_animais INTEGER ,
                animais_registrados INTEGER,
                status INTEGER(1),
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(fazenda_origem) REFERENCES fazenda(id),
                FOREIGN KEY(fazenda_destino) REFERENCES fazenda(id),
                FOREIGN KEY(fazenda_terceiro_id) REFERENCES fazenda_terceiro(id)         
            )`
        );

        /* this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS gta_fazenda ON gta (fazenda_id)`); */

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS lote(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                fazenda_id INTEGER NOT NULL,
                nome VARCHAR(100) NOT NULL,
                descricao VARCHAR(200),
                status INTEGER(1) NOT NULL,
                FOREIGN KEY(fazenda_id) REFERENCES fazenda(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS categoria(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_organizacao INTEGER NOT NULL,
                nome VARCHAR(100) NOT NULL,
                status INTEGER(1) NOT NULL,
                FOREIGN KEY(id_organizacao) REFERENCES organizacao(id)
            )`
        );
                
        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_sanitario (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                data_criacao DATE NOT NULL,
                fazenda_id INTEGER NOT NULL,
                nome VARCHAR(100) NOT NULL,        
                status INTEGER(1) NOT NULL,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(fazenda_id) REFERENCES fazenda(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_sanitario_principio_ativo (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_rotina_sanitario INTEGER NOT NULL,
                id_farmacia_principio_ativo INTEGER NOT NULL,
                dose INTEGER NOT NULL,
                data_criacao DATE NOT NULL,
                id_unidade_medida INTEGER NOT NULL,
                FOREIGN KEY(id_farmacia_principio_ativo)  REFERENCES farmacia_principio_ativo(id),
                FOREIGN KEY(id_unidade_medida) REFERENCES unidade_medida(id),
                FOREIGN KEY(id_rotina_sanitario) REFERENCES rotina_sanitario(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_sanitario_produto (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_rotina_sanitario INTEGER NOT NULL,
                id_farmacia_produto INTEGER NOT NULL,
                dose INTEGER NOT NULL,
                data_criacao DATE NOT NULL,
                FOREIGN KEY(id_rotina_sanitario) REFERENCES rotina_sanitario(id),
                FOREIGN KEY(id_farmacia_produto) REFERENCES farmacia_produto(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_sanitario_classe (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_rotina_sanitario INTEGER NOT NULL,
                id_farmacia_classe INTEGER NOT NULL,
                dose INTEGER NOT NULL,
                data_criacao DATE NOT NULL,
                id_unidade_medida INTEGER NOT NULL,
                FOREIGN KEY(id_farmacia_classe)  REFERENCES farmacia_classe(cod_classificacao),
                FOREIGN KEY(id_unidade_medida) REFERENCES unidade_medida(id),
                FOREIGN KEY(id_rotina_sanitario) REFERENCES rotina_sanitario(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                nome VARCHAR(200) NOT NULL,
                id_fazenda INTEGER NOT NULL,
                gta_conf INTEGER NOT NULL,
                origem_conf INTEGER NOT NULL,
                manejo_conf INTEGER NOT NULL,
                sufixo_tag VARCHAR(8),
                prefixo_tag VARCHAR(8),
                digitos_tag INTEGER(8),
                categoria_conf INTEGER NOT NULL,
                dt_nascimento_conf Date NOT NULL,
                dt_nascimento DATE,
                idade_mes INTEGER,
                raca_conf INTEGER NOT NULL,
                pesagem_conf INTEGER NOT NULL,
                sisbov_conf INTEGER NOT NULL,
                lote_conf INTEGER NOT NULL,
                sexo_conf INTEGER NOT NULL,
                sexo INTEGER,
                dt_criacao Date NOT NULL,
                rotina_sanitario_conf INTEGER NOT NULL,
                status INTEGER(1) NOT NULL,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)
            )`
        );        

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal_lote (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_rotina_animal INTEGER NOT NULL,
                id_lote INTEGER NOT NULL,
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id),
                FOREIGN KEY(id_lote) REFERENCES lote(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal_categoria (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_rotina_animal INTEGER NOT NULL,
                id_categoria INTEGER NOT NULL,
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id),
                FOREIGN KEY(id_categoria) REFERENCES categoria(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS animal (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                tag VARCHAR(15) NOT NULL,
                manejo VARCHAR(45),
                sisbov VARCHAR(45),
                dt_nascimento DATE,
                status INTEGER(1) NOT NULL,
                dt_criacao DATE,
                sexo VARCHAR(1),
                id_lote INTEGER,
                id_categoria INTEGER,
                id_fazenda INTEGER NOT NULL,
                id_gta INTEGER,
                id_fazenda_origem INTEGER,
                ativo INTEGER(1) NOT NULL,
                id_fazenda_terceiro INTEGER,
                id_rotina_animal INTEGER,
                campos_atualizados INTEGER,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id),
                FOREIGN KEY(id_categoria) REFERENCES categoria(id),
                FOREIGN KEY(id_lote) REFERENCES lote(id),
                FOREIGN KEY(id_gta) REFERENCES gta(id),
                FOREIGN KEY(id_fazenda_terceiro) REFERENCES fazenda_terceiro(id), 
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id)
            )`
        );
   
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS animal_tag_index ON animal (tag)`);
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS animal_manejo_index ON animal (manejo)`);
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS animal_sisbov_index ON animal (sisbov)`);
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS animal_fazenda_index ON animal (id_fazenda)`);
        this.tablesCreate.push(`CREATE INDEX IF NOT EXISTS animal_status ON animal (status)`);

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal_raca (
                id_rotina_animal INTEGER NOT NULL,
                id_raca INTEGER INTEGER NOT NULL,
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id),
                FOREIGN KEY(id_raca) REFERENCES raca(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS animal_raca (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_raca INTEGER NOT NULL,
                id_animal INTEGER NOT NULL, 
                peso INTEGER NOT NULL,
                FOREIGN KEY(id_raca) REFERENCES raca(id),
                FOREIGN KEY(id_animal) REFERENCES animal(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS raca_composta(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_fazenda INTEGER NOT NULL,
                status INTEGER NOT NULL,
                data_criacao DATE NOT NULL,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS raca_composta_raca (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                id_raca INTEGER NOT NULL,
                id_raca_composta NOT NULL,
                peso INTEGER NOT NULL,
                FOREIGN KEY(id_raca) REFERENCES raca(id),
                FOREIGN KEY(id_raca_composta) REFERENCES raca_composta(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS raca_composta_rotina_animal (
                id_raca_composta INTEGER NOT NULL,
                id_servidor INTEGER,
                id_rotina_animal INTEGER NOT NULL,
                FOREIGN KEY(id_raca_composta) REFERENCES raca_composta(id),
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal_categoria (
                id_rotina_animal INTEGER NOT NULL,
                id_categoria INTEGER NOT NULL,
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id),
                FOREIGN KEY(id_categoria) REFERENCES categoria(id)    
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal_sanitario (
                id_rotina_animal INTEGER NOT NULL, 
                id_servidor INTEGER,
                id_rotina_sanitario INTEGER NOT NULL, 
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id),
                FOREIGN KEY(id_rotina_sanitario) REFERENCES rotina_sanitario(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_animal_raca (
                id_rotina_animal INTEGER NOT NULL,
                id_servidor INTEGER,
                id_raca INTEGER NOT NULL,
                FOREIGN KEY(id_rotina_animal) REFERENCES rotina_animal(id),
                FOREIGN KEY(id_raca) REFERENCES raca(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS animal_pesagem (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                peso INTEGER NOT NULL,
                data DATE NOT NULL,
                id_rotina_manejo_combinado INTEGER,
                dt_criacao DATE NOT NULL,
                id_animal INTEGER NOT NULL,
                FOREIGN KEY(id_animal) REFERENCES animal(id),
                FOREIGN KEY(id_rotina_manejo_combinado) REFERENCES rotina_manejo_combinado(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS animal_morte (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                data DATE NOT NULL,
                causa INTEGER NOT NULL,
                id_animal INTEGER NOT NULL,
                dt_criacao DATE NOT NULL,
                FOREIGN KEY(id_animal) REFERENCES animal(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS troca_tag (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                atual VARCHAR(15) NOT NULL,
                nova VARCHAR(15) NOT NULL,
                id_animal INTEGER NOT NULL,
                dt_criacao DATE NOT NULL,
                data DATE NOT NULL,
                FOREIGN KEY(id_animal) REFERENCES animal(id)
            )`
        );     

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_venda (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                nome VARCHAR(100) NOT NULL,
                gta_conf INTEGER NOT NULL,
                destino_conf INTEGER NOT NULL,
                pesagem_conf INTEGER NOT NULL,
                id_fazenda INTEGER NOT NULL,
                dt_criacao DATE NOT NULL,
                status INTEGER(1) NOT NULL,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS troca_categoria (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                data DATE NOT NULL,
                id_animal INTEGER NOT NULL,
                id_categoria_atual INTEGER NOT NULL,
                id_categoria_nova INTEGER NOT NULL,
                id_rotina_manejo_combinado INTEGER,
                dt_criacao DATE NOT NULL,
                FOREIGN KEY(id_rotina_manejo_combinado) REFERENCES rotina_manejo_combinado(id),
                FOREIGN KEY(id_animal) REFERENCES animal(id),
                FOREIGN KEY(id_categoria_atual) REFERENCES categoria(id),
                FOREIGN KEY(id_categoria_nova) REFERENCES categoria(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS troca_lote (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                data DATE NOT NULL,
                id_animal INTEGER NOT NULL,
                id_lote_atual INTEGER NOT NULL,
                id_lote_nova INTEGER NOT NULL,
                id_rotina_manejo_combinado INTEGER,
                dt_criacao DATE NOT NULL,
                FOREIGN KEY(id_rotina_manejo_combinado) REFERENCES rotina_manejo_combinado(id),
                FOREIGN KEY(id_animal) REFERENCES animal(id),
                FOREIGN KEY(id_lote_atual) REFERENCES lote(id),
                FOREIGN KEY(id_lote_nova) REFERENCES lote(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS animal_venda (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                peso INTEGER,
                data DATE NOT NULL,
                id_animal INTEGER NOT NULL, 
                id_rotina_venda NOT NULL,
                id_fazenda INTEGER NOT NULL,
                id_fazenda_destino INTEGER,
                id_fazenda_terceiro INTEGER,
                id_gta INTEGER, 
                dt_criacao DATE NOT NULL,
                FOREIGN KEY(id_gta) REFERENCES gta(id),                
                FOREIGN KEY(id_animal) REFERENCES animal(id),
                FOREIGN KEY(id_rotina_venda) REFERENCES rotina_venda(id),
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id),
                FOREIGN KEY(id_fazenda_destino) REFERENCES fazenda(id),
                FOREIGN KEY(id_fazenda_terceiro) REFERENCES fazenda_terceiro(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS refugo_venda (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                peso INTEGER,
                data DATE NOT NULL,
                id_animal INTEGER NOT NULL,
                id_rotina_venda NOT NULL,
                id_fazenda INTEGER NOT NULL,
                motivo VARCHAR(200),
                dt_criacao DATE NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id),
                FOREIGN KEY(id_animal) REFERENCES animal(id),
                FOREIGN KEY(id_rotina_venda) REFERENCES rotina_venda(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS area_modulo (
                id PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                id_fazenda INTEGER NOT NULL,
                status INTEGER(1) NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS area_capim (
                id PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                status INTEGER(1) NOT NULL
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS area_servico (
                id PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                status INTEGER(1) NOT NULL
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS area_piquete (
                id PRIMARY KEY,
                tamanho_efetivo  REAL,
                nome VARCHAR(255) NOT NULL,
                tamanho REAL,
                id_area_capim INTEGER NOT NULL,
                id_area_modulo INTEGER NOT NULL,
                status INTEGER(1),
                FOREIGN KEY(id_area_capim) REFERENCES area_capim(id),
                FOREIGN KEY(id_area_modulo) REFERENCES area_modulo(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS avaliacao_pastagem (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                escore INTEGER NOT NULL,
                efetividade INTEGER NOT NULL,
                data DATE NOT NULL,
                dt_criacao DATE NOT NULL,
                id_area_piquete INTEGER NOT NULL,
                observacao VARCHAR(255),
                FOREIGN KEY(id_area_piquete) REFERENCES area_piquete(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS avaliacao_pastagem_area_servico (
                id_avaliacao_pastagem INTEGER NOT NULL,
                id_area_servico INTEGER NOT NULL,
                FOREIGN KEY(id_avaliacao_pastagem) REFERENCES avaliacao_pastagem(id),
                FOREIGN KEY(id_area_servico) REFERENCES area_servico(id)
            )`
        );

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS sanitario (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_animal INTEGER NOT NULL,
                id_rotina_sanitario INTEGER NOT NULL,
                dt_criacao DATE NOT NULL,
                id_farmacia_classe INTEGER,
                id_farmacia_principio_ativo INTEGER,
                id_farmacia_produto INTEGER,
                dose REAL NOT NULL,
                id_rotina_manejo_combinado INTEGER,
                data DATE,
                id_unidade_medida INTEGER NOT NULL,
                FOREIGN KEY(id_animal) REFERENCES animal(id),
                FOREIGN KEY(id_rotina_manejo_combinado) REFERENCES rotina_manejo_combinado(id),
                FOREIGN KEY(id_farmacia_classe) REFERENCES farmacia_classe(id),
                FOREIGN KEY(id_farmacia_principio_ativo) REFERENCES farmacia_principio_ativo(id),
                FOREIGN KEY(id_farmacia_classe) REFERENCES farmacia_classe(cod_classificacao)
            )`
        );      

        this.tablesCreate.push(`CREATE TABLE IF NOT EXISTS rotina_manejo_combinado (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_servidor INTEGER,
                pesagem_conf INTEGER(1) NOT NULL,
                rotina_sanitario_conf INTEGER(1) NOT NULL,
                lote_conf INTEGER(1) NOT NULL,
                categoria_conf INTEGER(1) NOT NULL,
                id_fazenda INTEGER NOT NULL,
                nome VARCHAR(255) NOT NULL,
                status INTEGER(1) NOT NULL,
                dt_criacao DATE NOT NULL,
                sincronizado INTEGER(1) NOT NULL,
                FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)
            )`
        );

    }



}