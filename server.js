'use strict';

const express = require('express');
const path = require('node:path');
// const script=require('./views/style.css');

// константы
const port = 8080;
const host = '0.0.0.0';

// приложение
const app = express();
// app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.use('/lol', (request, response) => {
  response.render("index", {
        title: "Клуб по интересам html/css/js!!!",
        description: 'lol',
        text: `Очень внезапно эта профессия вдруг по великому случаю стала очень вакантной и прибыльной. Вследствие чего и востребованной. При том что раньше программистом называли какого-то лоха в самом  пыльном углу. Куда даже свет не падал. Одно было ясно! Это место старались обходить стороной. Потому что там сидит очень странный задрот и непонятно чем занимается. (Еще колдует, когда нет возможности “шпрехать компутер”.) Такой вот, очень загадочный персонаж!

        Как еще в простонародье называется “верстальщик”. Желательно с обязательными навыками ноды или хотя бы пехепешки. Про знание наизусть всех тегов разметки и разных способов верстки, даже и речи быть не может. Не Дай Бог чего-то да и не знать!

        Но и это не удержит востребованность в такой далекой от реальности и здравого смысла, “специальности”. Если её так можно назвать.

        Одна только фраза шепотом: “он умеет шпрехать компутер”. Как в ту же секунду почту закидывают коммерческими предложениями и просто разрывают телефон с полной уверенностью что Ты “вдруг сразу уважаемый” миллионер, просто нужен особый подход чтобы выжать из тебя деньги.

        Поэтому такое экстравагантное название сайта как: “веб мастерская имени Барона Сайтоверстаузена”, несмотря на всю веселость. К необычайно парадоксальным стечением обстоятельств, привлекает мошенников и шарлатанов всех цветов и оттенков. Но таких примитивных, что до них не донести простую информацию что вместо целого штата богатейших сотрудников, это портфолио одного человека. Который тоже ищет работу. И готов поменять свой труд на денежный эквивалент, но никак не наоборот.

        И как обычно все с железной стабильностью </p>

        Деньги есть.

        <p class="margin">Они точно есть, но только завтра в светлом будущем. А пока вкалывай с утра до ночи, борись с выгоранием и жри волшебные таблетки, чтобы две характеристики были чуточку терпимее.

      И может быть в скором будущем из всего этого выйдет что нибудь шикарное!` ,
        phone: "+7"

    });
});
app.use('/super', (request, response) => {
  response.render("index", {
        title: "Three",
      text: 'LOLO',

        phone: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
});
app.use('/', (request, response) => {
  response.render("index", {
    title: "nodeJS on GitHub!!!",
  text: 'OOOOLLOLL',
    phone: "+7"
  });
});
app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});
