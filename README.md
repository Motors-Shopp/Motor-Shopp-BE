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

- yarn (para baixar as dependencias)
- yarn typeorm migration:run -d src/data-source.ts (para rodar a migration e criar as tabelas)
- yarn dev

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