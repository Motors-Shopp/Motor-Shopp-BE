# Motors-Shopp-BE
Back End

- criar um banco de dados no postgress (usando create database "nome do banco de dados ")

- adicionar um arquivo .env seguindo abaixo o
 
SECRET_KEY="" - inserir uma palavra para a senha ex "SECRET_KEY"
DB_HOST="" definir como "localhost" para uma aplicação local 
DB_USER="" inserir o nome de usuario do progrest
DB_PASSWORD="" inserir a senha do usuario do progrest
DB="" inserir o nome do banco de dados criado
PORT="" inserir uma porta para rodar o servidor ex: 3005

- para instalar as dependencias - yarn
- para rodar a migration e criar as tabelas- yarn typeorm migration:run -d src/data-source.ts
- para executar o app - yarn dev

Rotas
GET - http://localhost:3005/vehicles/  - Mostra uma lista de todos os veiculos criados - 200 OK

POST - http://localhost:3005/vehicles/  - Cria um novo veiculo 201 Created - 
{
	"title":"title",
	"year":"2000",
	"kilometers":"21",
	"price":"42",
	"description":"72",
	"typeOfVehicle":"typeOfVehicle",
	"img":"img",
	"fristImg":"fristImg"
}


###################################################
exemplo doc 


</br>
Backend de um sistema de avaliação de filmes. Os usuários possuem três perfis: admin, crítico e usuário comum.
</br>
## Tecnologias:
- Linguagem:
  - Python 3
- Framework:
  - Django com Generic Views
<br>
## Endpoints
### Criação de usuários
#### POST `/api/accounts/`
> Rota responsável pela criação de usuários. Não há autenticação para este endpoint. Isso significa que qualquer pessoa pode criar qualquer usuário.
- Corpo requisição:
```json
{
    "username": "user",
    "password": "1234",
    "first_name": "John",
    "last_name": "Wick",
    "is_superuser": false,
    "is_staff": false
}
```
- Corpo da resposta:
```json
{
    "id": 1,
    "username": "user",
    "first_name": "John",
    "last_name": "Wick",
    "is_superuser": false,
    "is_staff": false
}
```
- Status: 201 CREATED
- Caso haja a tentativa de criação de um usuário que já está cadastrado o sistema responde com HTTP 409 - Conflict.
<br>
### Autenticação de usuários
#### POST `/api/login/`
> Rota responsável pelo login de usuários.
- Corpo requisição:
```json
{
    "username": "user",
    "password": "1234"
}
```
- Corpo da resposta:
```json
{
    "token": "dfd384673e9127213de6116ca33257ce4aa203cf"
}
```
- Status: 200 OK
<br>
### Permissões
Todos os endpoints que exigirem a utilização de um token de acesso deverão responder da seguinte maneira caso seja informado um token inválido:
```json
{
    "detail": "Invalid token."
}
```
- Status: 401
Caso seja informado um token válido, porém que não atenda aos requisitos mínimos de permissão, por exemplo, se para acessar o endpoint o usuário deve ser do tipo instrutor e foi fornecido um token de estudante ou facilitador, esta deve ser a resposta:
```json
{
    "detail": "You do not have permission to perform this action."
}
```
- Status: 403
<br>
### Movies
> Apenas um User com acesso de admin (ou seja, is_superuser == True) pode cadastrar novos filmes, atualizá-los e excluí-los.
#### POST `/api/movies/`
> Rota responsável pela criação de filmes.
- Corpo requisição:
```json
{
    "title": "O Poderoso Chefão 2",
    "duration": "175m",
    "genres": [
        {"name": "Crime"},
        {"name": "Drama"}
    ],
    "premiere": "1972-09-10",
    "classification": 14,
    "synopsis": "Don Vito Corleone (Marlon Brando) é o chefe de uma 'família' ..."
}
```
- Corpo da resposta:
```json
{
    "id": 1,
    "title": "O Poderoso Chefão 2",
    "duration": "175m",
    "genres": [
        {
            "id": 1,
            "name": "Crime"
        },
        {
            "id": 2,
            "name": "Drama"
        }
    ],
    "premiere": "1972-09-10",
    "classification": 14,
    "synopsis": "Don Vito Corleone (Marlon Brando) é o chefe de uma ..."
}
```
- Status: 201 CREATED
- Caso haja a tentativa de criação de um filme que já está cadastrado o sistema responde com HTTP 400:
```json
{
    "title": "movie with this name already exists"
}
```
<br>