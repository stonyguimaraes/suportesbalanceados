# Suportes Balanceados

Este projeto contém uma função que verifica se uma string de colchetes está balanceada. A função suporta os seguintes tipos de colchetes: `()`, `{}`, e `[]`.

## Descrição do Problema

Escreva uma função que receba uma string de colchetes como entrada e determine se a ordem dos parênteses é válida. Um colchete é considerado qualquer um dos seguintes caracteres: `(`, `)`, `{`, `}`, `[`, ou `]`.

Dizemos que uma sequência de colchetes é válida se as seguintes condições forem atendidas:

- **Não contém colchetes sem correspondência.**
- **O subconjunto de colchetes dentro dos limites de um par de colchetes correspondente também é um par de colchetes válido.**

### Exemplos

- `(){}[]` é válido
- `[{()}](){}` é válido
- `[]{()` não é válido
- `[{)]` não é válido


