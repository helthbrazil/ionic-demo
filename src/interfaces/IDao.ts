export interface IDao<E> {
    save(obj: E, callbackSucess, callbackError);
    update(obj: E, callbackSucess, callbackError);
    delete(id: number, callbackSucess, callbackError);
    find(id: number, callbackSucess, callbackError);
    findAll(callbackSucess, callbackError);
}