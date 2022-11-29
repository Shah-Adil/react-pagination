

export const  genres = [
    {id: "a1" , name: "Action"},
    {id: "c1" , name: "Comedy"},
    {id: "t1" , name: "Triller"},
    {id: "h1" , name: "Horror"},
];

export function getGenres() {
    return genres.filter(g => g );
}