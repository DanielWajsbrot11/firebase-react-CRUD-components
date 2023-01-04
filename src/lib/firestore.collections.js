import { collection, orderBy,query } from "firebase/firestore";
import { db } from "./init-firebase";

export const movieCollectionRef = collection(db, 'movies')
export const orderedMovieCollectionRef = query(collection(db, 'movies'), orderBy("name","asc"))