# Laravel 5.2 Angular test project for Devision

# Demo http://78.128.71.92/

# Requirements
PHP >= 5.5.9
OpenSSL PHP Extension
PDO PHP Extension
Mbstring PHP Extension
Tokenizer PHP Extension

# Installation
1. Clone this repository in your web folder
2. Go to devision folder and edit .env file : DB_DATABASE=devision
DB_USERNAME=root
DB_PASSWORD=alex
3. Import sql dump from sql/devision.sql to your new database
4. make folders /storage and /public/uploads writable by chmod -R 777 /storage /public/uploads
5. In root folder project run:  php artisan cache:clear  and  php artisan config:cache 
6. Start php server by: php artisan serve
7. Go to http://localhost:8000
