export const makeImagePath = (id:string, format:string = "original") =>
    `https://image.tmdb.org/t/p/${format}${id}`;