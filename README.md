# Filmes Ruan App

## Descrição

Este é um aplicativo de descoberta de filmes construído utilizando as seguintes tecnologias:

- **React**: Para a construção de componentes de interface de usuário.
- **Next.js**: Framework para React que oferece renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, garantindo mais segurança e clareza no código.
- **SCSS**: Um pre-processador CSS que permite o uso de variáveis, aninhamento de regras, mixins, herança e mais, facilitando a manutenção e escalabilidade dos estilos.
- **API de Filmes**: Utilizamos a API do The Movie Database (TMDb) para buscar informações sobre filmes.

## Funcionalidades

- Exibição de uma lista de filmes obtidos através da API do TMDb.
- Cada filme é exibido em um cartão com detalhes básicos.

## Como rodar o projeto

### Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/movie-discovery-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd movie-discovery-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

### Rodando o projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Abra o navegador e acesse `http://localhost:3000`.

### Estrutura de Pastas

- **`/pages`**: Contém as páginas da aplicação.
- **`/components`**: Contém os componentes reutilizáveis da aplicação, como `Card` , `Lista` e `Estrela`.
- **`/styles`**: Contém os arquivos de estilo em SCSS.

### Configuração da API

O projeto utiliza a API do The Movie Database (TMDb). Certifique-se de configurar sua chave de API corretamente no arquivo de código que faz a requisição:

```typescript
axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
        api_key: 'segurança',
        language: 'pt-BR'
    }
})
```

Substitua `'e27d5a0815a0ef7d538fb2929fb0705b'` pela sua chave de API pessoal obtida no site do TMDb.

## Contribuição

Se você quiser contribuir com o projeto, sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
```
