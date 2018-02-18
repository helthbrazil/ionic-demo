export class Util {

    static validarString(text: string) {
        return (text.length === 0 || !text.trim());
    };

    static construirArrayAtualizacao(valor: number): Array<number> {
        if (valor == null || valor == 0) {
            return [0, 0, 0, 0, 0, 0, 0, 0];
        } else {
            let bynary = valor.toString(2);
            let length = bynary.length;
            let array = [];
            for (let i = (length - 1); i >= 0; i--) {
                array.unshift(parseInt(bynary.substring(i, (i + 1))));
            }

            let difference = (8 - length);

            for (let i = 0; i < difference; i++) {
                array.unshift(0);
            }

            return array;
        }
    }

    static getValorByArray(array: Array<number>) {
        let dados = array.toString().replace(/,/g, "");
        let valor = parseInt(dados, 2);
        return valor;
    }

    static dataInicioEFinal(dataString: string) {
        let response = [];
        if (dataString != null) {
            if (dataString.length == 10) {
                response.push(dataString + " 00:00:00");
                response.push(dataString + " 23:59:59");
            } else {
                response = null;
            }
        } else {
            response = null;
        }

        return response;
    }

}