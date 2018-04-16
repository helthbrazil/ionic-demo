import { Injectable } from "@angular/core";
import { BD } from "../persistence/bd";
import { IDao } from "../interfaces/IDao";
import { Category } from "../entity/category";

@Injectable()
export class CategoryDao extends BD implements IDao<Category>{

    constructor() {
        super();
    }

    save(category: Category, callbackSucess: any, callbackError: any) {
        let query = `INSERT INTO category (name) VALUES(?)`;
        let params = [category.$name];

        this.executeQuery(query, params, response => {
            callbackSucess(response.insertId);
        }, error => {
            callbackError(error);
        });
    }

    update(obj: Category, callbackSucess: any, callbackError: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: number, callbackSucess: any, callbackError: any) {
        throw new Error("Method not implemented.");
    }
    find(id: number, callbackSucess: any, callbackError: any) {
        throw new Error("Method not implemented.");
    }
    findAll(callbackSucess: any, callbackError: any) {
        let query = `SELECT * FROM category`;
        let params = [];

        this.executeQuery(query, params, response=>{
            let categoryList = new Array<Category>();
            let rows = response.rows;
            let lengthOfCategoryList = rows.length;

            for(let i = 0 ; i < lengthOfCategoryList ; i++){
                let data = rows.item(i);
                let category = new Category();
                category.$id = data.id;
                category.$name = data.name;

                categoryList.push(category);
            }

            callbackSucess(categoryList);
        }, error=>{
callbackError(error);
        });
    }





}