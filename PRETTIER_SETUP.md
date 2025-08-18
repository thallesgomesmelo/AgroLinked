# Configuração do Prettier

Este projeto está configurado com o Prettier para formatação automática de código.

## Configurações Aplicadas

### Arquivo `.prettierrc`

- **Indentação**: 4 espaços
- **Largura máxima**: 80 caracteres
- **Aspas**: Duplas
- **Ponto e vírgula**: Sempre
- **Vírgula final**: ES5
- **Parênteses em arrow functions**: Sempre

### Scripts Disponíveis

```bash
# Formatar todos os arquivos
npm run format

# Verificar se os arquivos estão formatados (sem alterar)
npm run format:check
```

### Configuração do VS Code

O projeto inclui configurações do VS Code que:

- Define o Prettier como formatador padrão
- Formata automaticamente ao salvar
- Formata automaticamente ao colar código
- Executa o ESLint ao salvar

### Extensões Recomendadas

Instale as seguintes extensões no VS Code:

- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Path Intellisense**

## Como Usar

1. **Formatação Manual**: Execute `npm run format`
2. **Formatação Automática**: Configure o VS Code para formatar ao salvar
3. **Verificação**: Use `npm run format:check` em CI/CD

## Arquivos Ignorados

O arquivo `.prettierignore` especifica quais arquivos e pastas devem ser ignorados pelo Prettier, incluindo:

- `node_modules/`
- `dist/`
- `build/`
- Arquivos de configuração do sistema
- Logs e arquivos temporários
