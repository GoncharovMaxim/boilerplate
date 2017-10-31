# boilerplate
### Установка:
* Установка [Node.js](https://https://nodejs.org/en/)
* Установка Gulp `npm install -g gulpjs/gulp#4.0`
* Установка зависимостей сборщика `npm install`
### Запуск сборщика:
* `gulp dev:serve` - Запуск developer сборки и сервера (localhost:3000)
* `gulp prod` - Запуск production сборки
### Структура проекта:
File/Directory | Description
---------------|-------------
**sass**|Директория файлов стилей. Главным файлом является ```main.scss```. Пример подключения блока в главный файл: ```@import 'blocks/b-name-block'```.|
blocks/        | .scss блоки ```_b-block.scss```
**img**        | Изображения, которые будут сжаты с помощью ```gulp-imagemin```
img/sprite/    | Изображения для растрового спрайта.
img/sprite/svg | SVG графика для спрайта.
**js**         | ```bundle.js``` - Главный исполняемый файл
| |```vendor.js``` - Файл подключения библиотек
vendor/        | Библиотеки и сторонние модули (Собираются в vendor.js)
**fonts**      | Шрифты
**inc**        | Общие блоки (footer, header ...)
```
src
|  index.html
|
|--fonts
|
|--img
|  |--img-1.jpg
|  |--img-2.png
|  |
|  |--sprite
|  |  |--img-1.jpg
|  |  |--img-2.png
|  |  |
|  |  |--svg/
|  |  |  |--svg-1.svg
|  |  |  |--svg-2.svg
|  |  |  ...
|  |  ...
|  ...
|
|--inc/
|  |--header.html
|  |--footer.html
|  ...
|
|--js/
|  |--bundle.js
|  |--vendor.js
|  |
|  |--vendor/
|     |--vendor-1.js
|     |--vendor-2.js
|     ...
|
|--sass/
|  |--_common.scss
|  |--_fonts.scss
|  |--_mixins.scss
|  |--_normalize.scss
|  |--_settings.scss
|  |--_sprite.scss
|  |--_variables.scss
|  |--main.scss
|  |
|  |--bloks/
|     |--name-block.scss
|     ...
```

* [object-fit-polyfill](https://github.com/bfred-it/object-fit-images) - Polyfill object-fit/object-position on <img>: IE9, IE10, IE11, Edge, Safari
* [picturefill](https://github.com/scottjehl/picturefill) - A responsive image polyfill for <picture>, srcset, sizes