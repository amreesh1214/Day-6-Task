// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//     a String representing the studio, and a String representing the rating as its arguments, 
//     and sets the respective class properties to these values.
class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    }
    
    
    getMovieDetails(){
        return(`The title of the movie is ${this.title} and their studio is ${this.studio} and atlast the  rating of the movie is ${this.rating}`)
    }
    
} let ticket = new movie("Kaithi","Red giant production ","PG12")
console.log(ticket.getMovieDetails())

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie1{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    if(rating==null){
        return this.rating="PG"
    }
}
    getMovieDetails(){
        return(`The title of the movie is ${this.title} and their studio is ${this.studio} and atlast the  rating of the movie is ${this.rating}`)
    }
    
} let ticket1 = new movie1("Kaithi","Red giant production")
console.log(ticket1.getMovieDetails())