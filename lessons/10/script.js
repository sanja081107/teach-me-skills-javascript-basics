document.addEventListener('DOMContentLoaded', function() {
    // var template = document.getElementById('template').innerHTML;
    // var container = document.getElementById('container');
    
    // Mustache.parse(template);

    // var view = {
    //     title: 'List:',
    //     users: [
    //         {
    //             firstName: 'Artem',
    //             lastName: 'Starotitorov'
    //         },
    //         {
    //             firstName: 'Vasia',
    //             lastName: 'Pupkin'
    //         }
    //     ]
    // };
    // var output = Mustache.render(template, view);

    // console.log(output);

    // container.innerHTML = output;



    var form = document.getElementById('user-parameters');
    var genderElement = form.elements.gender;
    var natElement = form.elements.nat;
    var userInfoContainer = document.getElementById('user-info-container');
    var userTemplate = document.getElementById('user-template').innerHTML;

    // Функция, которая строит так называемую query строку на основе объекта параметров.
    function getQueryString(parameters) {
        return '?' + Object.keys(parameters)
            .map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]);
            })
            .join('&');
    }

    function getRandomUser(parameters, onFinish) {
        // Получаем query строку, вида '?gender=<пол_который_выбрал_пользователь>&nat=<национальность_которую_выбрал_пользователь>'
        var queryString = getQueryString(parameters);

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://randomuser.me/api/' + queryString, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }

            // Преорбразуем строку с json в javascript объект.
            var responseObj = JSON.parse(xhr.responseText);

            // Функция вызывается послу успешного выполнения запроса, в неё передаём
            // объект пользователя.   
            onFinish(responseObj.results[0]);     
        };

        // 3. Отсылаем запрос
        xhr.send();
    }

    function renderUser(user) {
        // Отрисовываем шаблон на основе пользователя.
        var output = Mustache.render(userTemplate, user);

        // Вставляем отрисованный html в DOM.
        userInfoContainer.innerHTML = output;
    }

    // Вешаем обработчик отправки формы.
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Вытягиваем значение для полей формы gender и nationality
        var gender = genderElement.value;
        var nat = natElement.value;

        // Вызываем функцию отправки запроса на получение пользователя.
        // Первым аргументов передаём параметры запросы которые взяли из формы,
        // вторым - функцию, которая будет вызвана при успешном выполнении запроса,
        // в функцию будет передан пользователь, полученный в ответ на запрос к серверу.
        getRandomUser({ gender: gender, nat: nat }, renderUser)
    })

    // '2 + 2 = 4'

    // + - / *
})
