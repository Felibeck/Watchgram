import type { Comentario } from "./comentario";
import type { Usuario } from "./usuario";

export type Post = {
    foto: string;
    cantLikes: number;
    comentarios: string[];
}

export type PostDetalle = {
    Post && 
    comentarios: Comentario[],
    descripcion: string,
    fecha: Date,
}


export type PostPropsType = {
    post: Partial<Post>;
    usuario: Partial<Usuario>;
}