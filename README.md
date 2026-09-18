# 🎟️ OutGoing

## RU

### Сервис поиска мероприятий

**OutGoing** — веб-сервис для поиска и просмотра мероприятий.

Проект создаётся как pet-project для практики **HTML, SCSS и JavaScript**. Основная задача проекта — разработать удобный пользовательский интерфейс с поиском, фильтрацией, сортировкой и избранным.

Пользователь сможет находить интересные мероприятия, просматривать подробную информацию о них и сохранять понравившиеся события.

### Возможности

* Просмотр мероприятий
* Поиск мероприятий по названию
* Фильтрация мероприятий по категориям
* Сортировка списка мероприятий
* Просмотр подробной информации о мероприятии
* Добавление мероприятий в избранное
* Сохранение избранного после перезагрузки страницы
* Регистрация через форму
* Валидация введённых данных

Основные категории мероприятий:

* 🎵 Концерты
* 🎭 Спектакли
* 🎨 Выставки
* 🎤 Стендапы
* 🎓 Лекции
* 🎪 Фестивали

### Технологии

* HTML5
* SCSS / Sass
* JavaScript (ES6+)
* Flexbox
* CSS Grid
* Git
* LocalStorage

### Структура проекта

```text
eventhub-site/
├── images/
│   ├── event-logo.jpg
│   └── logo.png
│
├── src/
│   └── scss/
│       ├── abstracts/
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       │
│       ├── base/
│       │   └── _base.scss
│       │
│       ├── components/
│       │   ├── _buttons.scss
│       │   ├── _event-card.scss
│       │   ├── _header.scss
│       │   ├── _inputs.scss
│       │   └── _modal.scss
│       │
│       ├── layout/
│       │   └── _layout.scss
│       │
│       ├── pages/
│       │   └── _home.scss
│       │
│       └── _responsive.scss
│
├── style.scss
├── style.css
├── style.css.map
├── .gitignore
├── index.html
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

### Структура интерфейса

```text
OutGoing
│
├── Header
│   ├── Логотип
│   ├── Навигация
│   └── Выбор города
│
├── Hero
│   ├── Заголовок
│   └── Описание
│
├── Filters
│   ├── Поиск
│   ├── Категория
│   └── Сортировка
│
├── Events
│   └── Карточки мероприятий
│
├── Modal
│   └── Информация о мероприятии
│
└── City Modal
    └── Выбор города
```
---

## Автор

Проект разрабатывается @varyacvv в учебных целях.

* GitHub: [@varyacvv](https://github.com/varyacvv)
* Telegram: [@varyacvv](https://t.me/varyacvv)

---

## ENG

### Event Discovery Service

**OutGoing** is a web service for discovering and browsing events.

The project is being developed as a pet project to practice **HTML, SCSS and JavaScript**. The main goal is to build a convenient user interface with search, filtering, sorting and favorites functionality.

Users will be able to discover interesting events, view detailed information and save their favorite events.

### Features

* Browse available events
* Search events by title
* Filter events by category
* Sort the event list
* View detailed event information
* Add events to favorites
* Keep favorites after page reload
* Register using a form
* Validate user input

Main event categories:

* 🎵 Concerts
* 🎭 Theatre
* 🎨 Exhibitions
* 🎤 Stand-up
* 🎓 Lectures
* 🎪 Festivals

### Tech Stack

* HTML5
* SCSS / Sass
* JavaScript (ES6+)
* Flexbox
* CSS Grid
* Git / GitHub
* LocalStorage

### Project Structure

```text
OutGoing/
├── index.html
├── src/
│   ├── styles/
│   │   └── *.scss
│   └── main.js
├── images/
│   └── ...
└── README.md
```

### Interface Structure

```text
EventHub
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── City Button
│
├── Hero
│   ├── Heading
│   └── Description
│
├── Filters
│   ├── Search
│   ├── Category
│   ├── Sorting
│   └── Reset
│
├── Events
│   └── Event Cards
│
├── Event Modal
│   └── Event Details
│
└── City Modal
    └── City List
```
---

## Author

The project is being developed by @varyacvv for educational purposes.

* GitHub: [@varyacvv](https://github.com/varyacvv)
* Telegram: [@varyacvv](https://t.me/varyacvv)
