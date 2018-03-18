document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('user-parameters');
    var genderElement = form.elements.gender;
    var natElement = form.elements.nat;



    function getQueryString(parameters) {
        return '?' + Object.keys(parameters)
            .map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]);
            })
            .join('&');
    }
    function  builder (dataInf) {


        var newDiv = document.createElement('div');
        document.body.appendChild(newDiv);




        var fullname = document.createElement("li");
        newDiv.appendChild(fullname);
        fullname.innerHTML=dataInf.results[0].name.title+" "+dataInf.results[0].name.first+" "+dataInf.results[0].name.last;


        var email = document.createElement("li");
        newDiv.appendChild(email);
        email.innerHTML=dataInf.results[0].email;


        var pol = document.createElement("li");
        newDiv.appendChild(pol);
        pol.innerHTML=dataInf.results[0].gender;

        var location = document.createElement("li");
        newDiv.appendChild(location);
        location.innerHTML=dataInf.results[0].location.street+" "+dataInf.results[0].location.city+" "+dataInf.results[0].location.postcode;

        var dateOfbirtDay = document.createElement("li");
        newDiv.appendChild(dateOfbirtDay);
        dateOfbirtDay.innerHTML=dataInf.results[0].dob;



        var img = document.createElement("img");
        newDiv.appendChild(img);
        img.src =dataInf.results[0].picture.large;

    }
    function getRandomUser(parameters, onFinish) {
        // Получаем query строку, вида '?gender=<пол_который_выбрал_пользователь>&nat=<национальность_которую_выбрал_пользователь>'
        var queryString = getQueryString(parameters);

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://randomuser.me/api/' + queryString, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }

            // Преорбразуем строку с json в javascript объект.
            var data = JSON.parse(xhr.responseText);
            builder(data);

        };

        // 3. Отсылаем запрос
        xhr.send();
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
            getRandomUser({ gender: gender, nat: nat },builder);
        })


})

