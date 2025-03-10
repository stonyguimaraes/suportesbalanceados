
// função para verificar se a sequência de conchetes são válidos
function suportesBalanceados(seqConchetes) {
    let colchetes = [];
    let pares = {')': '(', '}': '{', ']': '['};
    
    for (let char of seqConchetes) {
        if (Object.values(pares).includes(char)) {
            colchetes.push(char);
        } else if (Object.keys(pares).includes(char)) {
            if (!colchetes.length || colchetes.pop() !== pares[char]) {
                return false;
            }
        }
    }
    
    return colchetes.length === 0;
}
// exibindo as informações no DOM 
document.addEventListener("DOMContentLoaded", () => {
    const testes = [
        "(){}[]",
        "[{()}](){}",
        "[]{()",
        "[{)]"
    ];

    // vamos exibir o resultado da array testes em uma lista
    const lista = document.createElement("ul");
    testes.forEach(teste => {
        const item = document.createElement("li");
        item.textContent = `${teste} → ${suportesBalanceados(teste) ? 'Válido' : 'Inválido'}`;
        lista.appendChild(item);
    });
    document.body.appendChild(lista);
});


