# DOM & Events

## **DOM (Document Object Model)**

– это представление документа в виде дерева объектов, доступное для изменения через JavaScript.

Типы узлов DOM-дерева: элемент, текст, комментарий

DOM нужен для того, чтобы манипулировать страницей – читать информацию из HTML, создавать и изменять элементы.

**Работа из консоли** - вкладка Elements, оператор $, $$

## **Навигация по DOM**

Самые верхние элементы дерева доступны напрямую из document - document.body и document.documentElement (html)

document.head  - IE8+

**Нельзя получить доступ к элементу, которого еще не существует в момент выполнения скрипта.**

- **Дочерние элементы (или дети)** – вложенные элементы первого уровня
- **Потомки** – все элементы, которые лежат внутри данного на любом уровне

Псевдо-массив **childNodes** хранит все дочерние элементы, включая текстовые. (Псевдо-массив - не массив, не имеет функций forEach, map etc.)

Свойства **firstChild** и **lastChild** обеспечивают доступ к первому и последнему элементу. 

- `previousSibling`- предыдущий узел
- `nextSibling`- следующий узел
- `parentNode`- родительcкий узел
- `children` – только дочерние узлы-элементы, то есть соответствующие тегам.
- `firstElementChild`, `lastElementChild` – соответственно, первый и последний дети-элементы.
- `previousElementSibling`, `nextElementSibling` – соседи-элементы.
- `parentElement` – родитель-элемент. (разница между ним и parentNode в том что дойдя до html мы получим null в случае вызова parentElement, и document в случае parentNode

# Поиск элементов

    document.getElementById('elementId'); //вернет элемент или null в случае отсутвия элемента с заданным id
    
    document.getElementsByTagName('div'); //вернет коллекцию div, пустую в случае отсутсвия элементов с данным именем
    
    document.getElementsByName(name); //вернет колллекцию элементов с атрибутом name
    
    document.getElementsByClassName(className); //коллекция элементов с классом className
    
    document.querySelectorAll(selector); //коллекция элементов по селектору
    
    document.querySelector(selector); //первый элемент соответствующий селектору
    
    elem.matches(selector); //true если элемент соответсвует селектору
    
    elem.closest(selector); //ближайший выше по иерархии соответствующий селектору
    

# Атрибуты и DOM-свойства

**Свойства**

    document.[body.id](http://body.id) = 'id1'; [//id](//id) отобразится во вкладке elements
    document.body.someProperty = 'prop1'; //не отобразится :)

**Атрибуты**

- `elem.hasAttribute(name)` – проверяет наличие атрибута
- `elem.getAttribute(name)` – получает значение атрибута
- `elem.setAttribute(name, value)` – устанавливает атрибут
- `elem.removeAttribute(name)` – удаляет атрибут
- `elem.attributes`  - псевдо-массив атрибутов

**Классы**

- `elem.className`  - класс в виде строки
- `elem.classList`  - коллекция классов

С помощью нестандартных атрибутов можно привязать к элементу данные, которые будут доступны в JavaScript.

Как правило, это делается при помощи атрибутов с названиями, начинающимися на `data-`

При доступе из js dashed-case трансформируется в camelCase.

## DOM

1. **Добавление, удаление, клонирование элемента**

  [Добавление и удаление узлов](https://learn.javascript.ru/modifying-document)

1. **Индекс выбранного элемента**

  [Справочник javascript: indexOf](http://javascript.ru/string/indexof)

1. **Работа с HTML - innerHtml**

  [Очистка памяти при removeChild/innerHTML](https://learn.javascript.ru/memory-removechild-innerhtml)

## Видео по теме DOM:

[Основы javascript 17 - Создание элементов динамически.](https://www.youtube.com/watch?v=v2nLPYTmxBo)

## **Events:**

1. **Объект события**

  [Объект события](https://learn.javascript.ru/obtaining-event-object)

1. **Делегирование событий**

  [Делегирование событий](https://learn.javascript.ru/event-delegation)

1. **Приём проектирования "поведение"**

  [Приём проектирования "поведение"](https://learn.javascript.ru/behavior)

1. **Действия браузера по умолчанию**

  [Действия браузера по умолчанию](https://learn.javascript.ru/default-browser-action)

1. **Генерация событий на элементах**

  [Генерация событий на элементах](https://learn.javascript.ru/dispatch-events)

## Видео по теме Events:

[Основы javascript 24 - Делегирование событий](https://www.youtube.com/watch?v=07pqPoYbY0k)
