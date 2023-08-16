 class CaixaDaLanchonete {

    cardapio = {
        cafe: { descricao: "Café", valor: 3.00 },
        chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
        suco: { descricao: "Suco Natural", valor: 6.20 },
        sanduiche: { descricao: "Sanduíche", valor: 6.50 },
        queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
        salgado: { descricao: "Salgado", valor: 7.25 },
        combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
        combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
    };

    calcularValorDaCompra(metodoDePagamento, itens) {

        const metodosDePagamento = ['dinheiro', 'debito', 'credito'];

        if(!metodosDePagamento.includes(metodoDePagamento)) {
            console.log("Forma de Pagamento Invalida!")
            return;
        }

        if (itens.length === 0) {
            console.log("Não há itens no carrinho de compra!");
            return;
        }

        let total = 0;

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            
            if (!this.cardapio.hasOwnProperty(codigo)) {
                return "Item inválido!";
            }

            const itemInfo = this.cardapio[codigo];
            total += itemInfo.valor * quantidade;
        }

        if (metodosDePagamento === 'dinheiro') {
            total *= 0.95;
        } else if (metodosDePagamento === 'credito') {
            total *= 1.03;
        }

        console.log(`R$ ${total.toFixed(2).replace('.', ',')}`);
        return;     
        
    }

}

export { CaixaDaLanchonete };
