class movie1{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    if(rating==null){
        return this.rating="PG"
    } else {
        return this.rating=rating

    }
}
getPG(array){
 let arr = array.filter((movie) => movie.rating == "PG")
    return arr
}

    getMovieDetails(){
        return(`The title of the movie is ${this.title} and their studio is ${this.studio} and atlast the  rating of the movie is ${this.rating}`)
    }
    
} let ticket1 = new movie1("Kaithi","Red giant production","PG20")
let ticket2 = new movie1("Don","lyca production")
let ticket3 = new movie1("Vikram","Raj kamal production")
let array = [ticket1,ticket2,ticket3]
console.log(ticket1.getPG(array))





class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    }
    
    
    getMovieDetails(){
        return(`The title of the movie is ${this.title} and their studio is ${this.studio} and atlast the  rating of the movie is ${this.rating}`)
    }
    
} let ticket = new movie("Casino Royale"," Eon Productions","PG13")
console.log(ticket.getMovieDetails())
