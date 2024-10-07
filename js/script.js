'use strict';
let personalMovieDB = {
    count: 0,
    movies: [],
    actors: {},
    genres: [],
    privat: false,
    start(){
      this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      while(this.count == ' ' || this.count == null || isNaN(this.count)){
         this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
rememberMyFilms (){
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        this.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
},


detectPersenalLevel () {
if (this.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (this.count >= 10 && this.count < 30) {
    console.log("Вы классический зритель");
} else if (this.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
},
showMYDB (hidden){
   if(!hidden){
      console.log(this);
   }
},
writeYourGeneres(){
 for(let i  = 1; i <= 3; i++){
   this.genres[i - 1] = prompt(`выш любимый жанр под номером ${i}`);
   if(this.geners == null && this.genres == undefined && this.genres == ''){
      i--;
    }
 } 
 this.genres.forEach(function(item, i){
   console.log(`Любимый жанр #${i} - это ${item}`)
 });
},

toggleVisibleMyDB (){
   if(this.privat){
      this.privat = false;
   }else{
      this.privat = true;
   }
//this.privat == false ? this.privat = true : this.privat = false;
//this.privat == true ? this.privat = false : this.privat = true;
},
};
