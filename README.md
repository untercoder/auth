## Тестовое задание Symfony + Api Platform + Vuetify

##### Стек который использовал
- PHP 8.1
- MySQL 8.0
- Nginx stable-alpine
- Symfony 6.2.7
- Api Platform 3.1.4
- Vuetify 2

##### Инструкция как это все поднять на локалке

Клонируем проект и устанавливаем зависимости:

`composer install`

Поднимаем docker-compose :

`docker compose build`

`docker compose up -d`

Получаем ip адрес бд внутри контейнера, после его нужно указать в .env

`docker inspect database | grep "IPAddress"`

Вписываем его сюда:

DATABASE_URL="mysql://admin:admin@**you-ip**/wod_dev?serverVersion=8.0"

Запускаем миграции:

`php /bin/console doctrine:migrations:migrate `

После запускаем фикстуру для генерации тестовых данных пользователй

`php bin/console doctrine:fixtures:load`

В результате в бд в таблице user должнго быть 20 тестовых пользователей. **Пароли генерятся по такой логике к юзеру user0 пароль password0**

![image info](https://i.ibb.co/CmSHBqL/2023-03-22-04-00-01.png)

Собираем фронт:

`yarn install`

`yarn dev`

##### Тестирование/Демонстрация

Переходим на: `http://localhost:8080/` в случае если ты не авторизован нет файла сесси тебя редиректнет на `http://localhost:8080/app/` страницу авторизации:

![image info](https://i.ibb.co/8Xw22Tb/2023-03-22-04-09-14.png)

Вводим тут email и пароль пользователя под которым хотим залогинится

В случае если данные не валидные появляется allert

![image info](https://i.ibb.co/2qZhWNP/2023-03-22-04-14-05.png)

В случае успешной авторизации происходит редирект на http://localhost:8080/app/table

![image info](https://i.ibb.co/zPNCRV4/2023-03-22-04-19-36.png)

При попытке зайти не авторизованным на http://localhost:8080/app/table возваращает на страницу авторизации

Чтобы повторить авторизацию можно удалить сесиию

![image info](https://i.ibb.co/wL4jwyB/2023-03-22-04-22-47.png)