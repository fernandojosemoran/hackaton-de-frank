entra a la carpeta backend y ejecuta lo siguiente

```powershell
python -m venv env 
```
despues ejecuta lo siguiente

```powershell
.\env\Scripts\activate
```
despues ejecuta lo siguiente

```powershell
pip install -r requirements.txt
```
si no te funciona usando pip directamente

```powershell
python -m pip install -r requirements.txt 
```
ahora ejecuta lo siguiente

```powershell
python .\manage.py makemigrations && python .\manage.py migrate 
```
ahora configura el archivo .env que esta en la carpeta `core` del backend debes de ingresar la contrasena de tu base de datos postgres y si quieres tu usuario lo demas dejalo como esta

```powershell
SECRET_KEY='-+8yv#ur$-z42p^xk0e6n51x=qqtvc&+$60tzkk_i=a^3evp)$8'
DEBUG=True
ALLOWED_HOSTS_DEV='127.0.0.1:3000,127.0.0.1:5000,127.0.0.1,127.0.0.1:8000, http://localhost:5173/'
CSRF_TRUSTED_ORIGINS_DEV='127.0.0.0:3000,127.0.0.1,127.0.0.1:8000, http://localhost:5173/'
ALLOWED_HOSTS_DEPLOY=""
CORST_ORIGIN_WHITELIST_DEPLOY=""
CSRF_TRUSTED_ORIGINS_DEPLOY=""

ENGINE='django.db.backends.postgresql_psycopg2'
NAME='Inventory'
USER='postgres' 
PASSWORD='ingresa tu contrasena'
HOST='localhost'
PORT='5432'
```

```powershell
python .\manage.py runserver 80 
```
despues ve a la carpeta fronted y ejecuta lo siguiente

```powershell
npm install 
```
una vez termine la instalacion ejecuta lo siguite

```powershell
npm run dev
```
te dara unos links, abre cualquiera en el navegador

no pude implementar las funcionalidades basicas como crear usuarios pero te dare los enlaces de la api

estos son los links de la api


## clientes
- http://127.0.0.1/create-client/
- http://127.0.0.1/search/name?slug=telma
- http://127.0.0.1/clients/
- http://127.0.0.1/delete-client/
- http://127.0.0.1/search/reputation?slug=Good

## productos
- http://127.0.0.1/products/
- http://127.0.0.1/search/product?category=Computers%20&%20Tablets
- http://127.0.0.1/delete-product/product/1
- http://127.0.0.1/create-product

# Ejemplos de Peticiones a la API usando `curl`

## Productos

### 1. Obtener la lista de productos

```bash
curl -X GET http://127.0.0.1/products/
```
## buscar producto

```powershell
curl -X GET "http://127.0.0.1/search/product?category=Computers%20&%20Tablets"

```
## Eliminar un producto por ID
curl -X DELETE http://127.0.0.1/delete-product/product/1

##  Crear un nuevo producto

```powershell
curl -X POST http://127.0.0.1/create-product -H "Content-Type: application/json" -d '{ "name": "Dell XPS 13", "category": "Computers & Tablets", "quantity": 5, "slug": "computers", "image": "/media/upload/products/1234567.jpg", "description": "A high-performance laptop" }'url -X POST http://127.0.0.1/create-client/ -H "Content-Type: application/json" -d '{ "name": "John", "last_name": "Doe", "phone": "555123456", "email": "johndoe@example.com", "localitation": "USA", "reputation": "Good", "date_of_birth": "1990-01-01" }'http://127.0.0.1/create-client/ -H "Content-Type: application/json" -d '{ "name": "John", "last_name": "Doe", "phone": "555123456", "email": "johndoe@example.com", "localitation": "USA", "reputation": "Good", "date_of_birth": "1990-01-01" }'
```

# ejemplo de curl para la api de clientes


## Crear un nuevo cliente
```powershell
curl -X POST curl -X POST http://127.0.0.1/create-client/ -H "Content-Type: application/json" -d '{ "name": "John", "last_name": "Doe", "phone": "555123456", "email": "johndoe@example.com", "localitation": "USA", "reputation": "Good", "date_of_birth": "1990-01-01" }'http://127.0.0.1/create-client/ -H "Content-Type: application/json" -d '{ "name": "John", "last_name": "Doe", "phone": "555123456", "email": "johndoe@example.com", "localitation": "USA", "reputation": "Good", "date_of_birth": "1990-01-01" }'

```

## Crear un nuevo cliente

```powershell
curl -X POST http://127.0.0.1/create-client/ -H "Content-Type: application/json" -d '{ "name": "John", "last_name": "Doe", "phone": "555123456", "email": "johndoe@example.com", "localitation": "USA", "reputation": "Good", "date_of_birth": "1990-01-01" }'

```

## Buscar un cliente por nombre

```powerhell
curl -X GET "http://127.0.0.1/search/name?slug=telma"
```

## Obtener la lista de clientes
```powershell
curl -X GET http://127.0.0.1/clients/
```

##  Eliminar un cliente por ID
```powershell
curl -X DELETE http://127.0.0.1/delete-client/1
```

## Buscar un cliente por reputación
```powershell
curl -X GET "http://127.0.0.1/search/reputation?slug=Good"
```

si las apis por alguna razon no funcionan como se debe preguntale a chat gpt