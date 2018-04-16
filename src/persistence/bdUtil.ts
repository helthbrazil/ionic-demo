import { Injectable } from "@angular/core";
import { BD } from "./bd";

@Injectable()
export class BDUtil extends BD {

    constructor() {
        super();
    }

    createTables() {
        let tablesCreate = [];

        tablesCreate.push(`CREATE TABLE IF NOT EXISTS category(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(200) NOT NULL
        )    
        `);

        tablesCreate.push(`CREATE TABLE IF NOT EXISTS item(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            price REAL NOT NULL,
            name VARCHAR(200) NOT NULL,
            category_id INTEGER NOT NULL,
            FOREIGN KEY(category_id) REFERENCES category(id)
        )    
        `);

        tablesCreate.forEach(script => {
            this.executeQuery(script, {}, sucess => {
                console.log(sucess);
            }, error => {
                console.log(error);
            });
        });

    }

}