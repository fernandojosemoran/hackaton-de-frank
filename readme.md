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



