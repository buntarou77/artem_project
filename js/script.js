const numberOfFilms = +prompt('введите кал-во просмотренных вами фильмов:', '');
const personalMovieDB = {
    count: numberOfFilms,
     movies: {},
     actors: {},
     generes: [ ],
     privat: false 
};
const a = prompt("один из последних просмотренных фильмов", ""),
b = prompt("на сколько оцените его?", ""),
c =  prompt("один из последних просмотренных фильмов", ""),
d = prompt("на сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);