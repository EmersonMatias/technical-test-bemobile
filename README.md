# Teste Tecnico BeMobile

### Índice

1. [Sobre](#sobre)
2. [Instalação](#instalação)
3. [Como Usar](#como-usar)
4. [Informações Importantes](#informaçoes-importantes)

## Sobre

Este projeto é uma aplicação ReactJS que visa atender aos requisitos de um teste técnico. Utiliza React.js para a construção do front-end e implementa funcionalidades de listagem e filtro de produtos. Além disso, são realizados testes unitários para garantir a qualidade do código. O back-end é simulado por um servidor json-server.

## Instalação
Para instalar e configurar o projeto localmente, siga estas etapas:
1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo aqui.
2. Clone o repositório do projeto:
```bash
git clone https://github.com/EmersonMatias/technical-test-bemobile
```
3. Navegue até o diretório do projeto:
```bash
cd technical-test-bemobile
```
4. Instale as dependências do projeto usando o npm:
```bash
cd npm i
```
## Como Usar
Após instalar o projeto e suas dependências, você pode executar os seguintes comandos:

* Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Este comando iniciará o servidor de desenvolvimento do Vite. Você poderá acessar o projeto no navegador em http://localhost:5173.

* Para construir o projeto para produção:
```bash
npm run build
```
Este comando compilará o projeto para produção na pasta dist.

* Para executar os testes unitários:
```bash
npm  test
```
Este comando executará os testes usando o Jest.

OBS: Para executar os testes primeiro execute o servidor json-server, caso contrário, 2 testes irão falhar.

* Para iniciar o servidor JSON para simular uma API:
```bash
npm run server-json
```
Este comando iniciará o servidor JSON usando o JSON Server.

## Informações Importantes
* O projeto utiliza React.js para a construção do front-end.
* O projeto utiliza json-server para simular o back-end do projeto.
* A visualização é responsiva para oferecer uma experiência adequada em dispositivos móveis e desktop.
* A tabela apresenta as seguintes colunas: imagem do usuário, nome, cargo, data de admissão e telefone.
* É possível realizar pesquisas na tabela por meio de um input, filtrando dados por cargo, nome e telefone.
* As formatações de datas e telefones são realizadas no front-end e não na API.

