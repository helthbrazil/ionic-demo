import { DadosRelatorio } from './../entity/dadosRelatorio';
import { RelatorioPesagemItem } from '../entity/relatorioPesagemItem';
export class Operacoes {

    public static getDados(lista: Array<number>): RelatorioPesagemItem {
        let dados = new RelatorioPesagemItem();
        dados.$quantidadeDeRegistros = lista.length;
        dados.$totalDePeso = parseFloat(this.soma(lista).toFixed(3));
        dados.$media = parseFloat(this.media(lista).toFixed(3));
        dados.$desvioPadrao = parseFloat(this.desvioPadrao(lista).toFixed(3));
        dados.$coeficienteDeVariacao = parseFloat(this.coeficienteDeVariacao(dados.$desvioPadrao, dados.$media).toFixed(3));

        return dados;
    }

    private static soma(lista: Array<number>): number {
        let soma = lista.reduce((a, b) => a + b, 0);
        return soma;
    }

    private static media(lista: Array<number>): number {
        return this.soma(lista) / lista.length;
    }

    private static desvioPadrao(lista: Array<number>): number {
        var i, j, total = 0, mean = 0, diffSqredArr = [];
        for (i = 0; i < lista.length; i += 1) {
            total += lista[i];
        }
        mean = total / lista.length;
        for (j = 0; j < lista.length; j += 1) {
            diffSqredArr.push(Math.pow((lista[j] - mean), 2));
        }
        return (Math.sqrt(diffSqredArr.reduce(function (firstEl, nextEl) {
            return firstEl + nextEl;
        }) / lista.length));
    }

    private static coeficienteDeVariacao(desvioPadrao: number, media: number): number {
        return (desvioPadrao / media) * 100;
    }
}