// Массив событий
const events = [
  {
    id: 1,
    title: "Летний фестиваль музыки: Сплетение",
    category: "concerts",
    categoryLabel: "Концерт",
    date: "2026-06-24T19:00",
    dateLabel: "24 июня, 19:00",
    location: "Томск, Красный Восток",
    city: "Томск",
    price: 1200,
    popularity: 5,
    image: "./images/event-logo.jpg",
    description: "Яркий open-air с живой музыкой, сценой и фуд-кортом под открытым небом. Соберутся лучшие инди-группы и диджеи города.",
  },
  {
    id: 2,
    title: "Гамлет: новая интерпретация",
    category: "plays",
    categoryLabel: "Спектакль",
    date: "2026-06-25T19:30",
    dateLabel: "25 июня, 19:30",
    location: "Театр им. Вахтангова",
    city: "Москва",
    price: 800,
    popularity: 4,
    image: "./images/event-logo.jpg",
    description: "Современное прочтение великой трагедии: неожиданные режиссёрские решения, минималистичные декорации и пронзительная игра актёров заставят по-новому взглянуть на знакомый сюжет.",
  },
  {
    id: 3,
    title: "Искусство XX века: ретроспектива",
    category: "exhibitions",
    categoryLabel: "Выставка",
    date: "2026-06-26T18:00",
    dateLabel: "26 июня, 18:00",
    location: "Третьяковская галерея",
    city: "Москва",
    price: 500,
    popularity: 3,
    image: "./images/event-logo.jpg",
    description: "Масштабная экспозиция, охватывающая ключевые направления прошлого столетия: от авангарда до поп-арта. Зрители увидят знаковые работы и смогут проследить эволюцию искусства.",
  },
  {
    id: 4,
    title: "Вечер юмора: лучшие комики",
    category: "stand-ups",
    categoryLabel: "Стендап",
    date: "2026-06-27T20:00",
    dateLabel: "27 июня, 20:00",
    location: "Stand Up Club",
    city: "Санкт-Петербург",
    price: 700,
    popularity: 4,
    image: "./images/event-logo.jpg",
    description: "Сольные выступления топовых комиков страны. Острые шутки, живое общение с залом и гарантированный заряд позитива на весь вечер.",
  },
  {
    id: 5,
    title: "Как устроена нейросеть: просто о сложном",
    category: "lections",
    categoryLabel: "Лекция",
    date: "2026-06-28T17:00",
    dateLabel: "28 июня, 17:00",
    location: "Дом культуры «Заря»",
    city: "Новосибирск",
    price: 300,
    popularity: 2,
    image: "./images/event-logo.jpg",
    description: "Доступная лекция о принципах работы нейронных сетей без сложных формул. Спикер разберёт реальные примеры и ответит на вопросы слушателей.",
  },
  {
    id: 6,
    title: "Фестиваль уличной еды",
    category: "festivals",
    categoryLabel: "Фестиваль",
    date: "2026-06-29T12:00",
    dateLabel: "29 июня, 12:00",
    location: "Парк Горького",
    city: "Москва",
    price: 0,
    popularity: 5,
    image: "./images/event-logo.jpg",
    description: "Гастрономический праздник под открытым небом: десятки корнеров с кухнями мира, живая музыка, кулинарные шоу и мастер-классы для всей семьи.",
  },
];

// Избранное (объявляем до первого использования)
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let currentCity = localStorage.getItem("currentCity") || "Все города";

// Модальное окно
const modal = document.getElementById("event-modal");
const modalBody = document.getElementById("modal-body");

const cityModal = document.getElementById("city-modal");
const cityList = document.getElementById("city-list");
const cityButton = document.querySelector('[aria-label="Выбрать город"]');

if (cityButton) {
  cityButton.textContent = currentCity;
}

// Функция создания карточки
function createCard(event) {
  return `
    <article class="event-card">
      <div class="event-card__image-wrapper">
        <img
          class="event-card__image"
          src="${event.image}"
          alt="${event.title}"
        />
        <span class="event-card__badge">${event.categoryLabel}</span>
        <button type="button" class="event-card__favorite" data-favorite-id="${event.id}" aria-label="В избранное">
          ♡
        </button>
      </div>
      <div class="event-card__content">
        <h3 class="event-card__title">${event.title}</h3>
        <div class="event-card__meta">
          <span class="event-card__date">${event.dateLabel}</span>
          <span class="event-card__location">${event.location}</span>
        </div>
        <div class="event-card__price">
          ${event.price > 0 ? `${event.price} ₽` : "Бесплатно"}
        </div>
        <button type="button" class="btn btn--accent" data-event-id="${event.id}">
          Подробнее
        </button>
      </div>
    </article>
  `;
}

// Функция рендера всех событий
function renderEvents(list) {
  const grid = document.getElementById("events-grid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="events__empty">
        <p>По вашему запросу ничего не найдено.</p>
        <p>Попробуйте изменить параметры фильтрации или сбросить фильтры.</p>
      </div>
    `;
  } else {
    grid.innerHTML = list.map(createCard).join("");
  }

  updateFavoritesInCards();
}

// Функция обновления избранного
function updateFavoritesInCards() {
  document.querySelectorAll("[data-favorite-id]").forEach((btn) => {
    const id = Number(btn.dataset.favoriteId);
    const isFav = favorites.includes(id);
    btn.textContent = isFav ? "♥" : "♡";
    btn.classList.toggle("active", isFav);
  });
}

// Первоначальный рендер
renderEvents(events);
updateFavoritesInCards();

// Получаем элементы управления
const searchInput = document.getElementById("event-search");
const categorySelect = document.getElementById("category-select");
const sortSelect = document.getElementById("sort-select");

const navLinks = document.querySelectorAll(".navigation .link");

function updateNavActive(activeCategory) {
  navLinks.forEach((link) => {
    link.classList.toggle("link--active", link.dataset.category === activeCategory);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.dataset.category;
    categorySelect.value = category;
    applyFilters();
    updateNavActive(category);
  });
});

// Функция фильтров и сортировки
function applyFilters() {
  // 1. Фильтр по поиску
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm);
    return matchesSearch;
  });

  // 2. Фильтр по категории
  const category = categorySelect.value;
  if (category !== "") {
    filteredEvents = filteredEvents.filter(
      (event) => event.category === category,
    );
  }

  if (currentCity && currentCity !== "Все города") {
    filteredEvents = filteredEvents.filter(
      (event) => event.city === currentCity,
    );
  }

  // 3. Сортировка
  const sortBy = sortSelect.value;

  filteredEvents.sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(a.date) - new Date(b.date);
      case "popular":
        return b.popularity - a.popularity;
      case "cheap":
        return a.price - b.price;
      case "expensive":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Рендерим отфильтрованный список
  renderEvents(filteredEvents);
}

// Навешиваем обработчики на фильтры
searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", () => {
  applyFilters();
  updateNavActive(categorySelect.value);
});
sortSelect.addEventListener("change", applyFilters);

// Инициализация (если в полях уже что-то выбрано)
applyFilters();

// Сброс фильтров
const resetButton = document.getElementById("reset-filters");

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  categorySelect.value = "";
  sortSelect.value = "date";
  currentCity = "Все города";
  localStorage.setItem("currentCity", currentCity);
  cityButton.textContent = "Все города";
  updateCityListActive();
  updateNavActive("");
  applyFilters();
});

// Модальное окно
function openModal(eventId) {
  const event = events.find((item) => item.id === Number(eventId));
  if (!event) return;

  modalBody.innerHTML = `
    <h2 class="modal__title">${event.title}</h2>
    <div class="modal__meta">
      <span>${event.dateLabel}</span>
      <span>${event.location}</span>
      <span>${event.price > 0 ? `${event.price} ₽` : "Бесплатно"}</span>
    </div>
    <p class="modal__description">
     ${event.description}
    </p>
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden"; // запрет прокрутки фона
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function openCityModal() {
  const cities = [...new Set(events.map((event) => event.city))];
  cities.unshift("Все города");

  cityList.innerHTML = cities
    .map(
      (city) => `
        <li class="city-list__item">
          <button
            type="button"
            class="city-list__button ${city === currentCity ? "active" : ""}"
            data-city="${city}"
          >
            ${city}
          </button>
        </li>
      `,
    )
    .join("");

  cityModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCityModal() {
  cityModal.hidden = true;
  document.body.style.overflow = "";
}

function selectCity(city) {
  currentCity = city;
  localStorage.setItem("currentCity", currentCity);
  cityButton.textContent = currentCity;
  updateCityListActive();
  closeCityModal();
  applyFilters();
}

function updateCityListActive() {
  document.querySelectorAll(".city-list__button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.city === currentCity);
  });
}

// Обработчик кликов (модалка, закрытие, избранное)
document.addEventListener("click", (e) => {
  const detailsButton = e.target.closest(".btn--accent[data-event-id]");
  if (detailsButton) {
    openModal(detailsButton.dataset.eventId);
  }

  const closeButton = e.target.closest("[data-close-modal]");
  if (closeButton) {
    closeModal();
  }

  const favButton = e.target.closest("[data-favorite-id]");
  if (favButton) {
    toggleFavorite(Number(favButton.dataset.favoriteId));
  }

  if (e.target.closest('[aria-label="Выбрать город"]')) {
    openCityModal();
  }

  const closeCityButton = e.target.closest("[data-close-city-modal]");
  if (closeCityButton) {
    closeCityModal();
  }

  const cityButton = e.target.closest(".city-list__button");
  if (cityButton) {
    selectCity(cityButton.dataset.city);
  }
});

// Функция переключения избранного
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoritesInCards();
}

// Escape для закрытия модального окна
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!modal.hidden) closeModal();
    if (!cityModal.hidden) closeCityModal();
  }
});