import type { Comentario } from "./comentarioType";
import type { Usuario } from "./usuario";

export type PostType = {
    foto: string;
    cantLikes: number;
    comentarios: string[];
    usuario: Partial<Usuario>;
}

export type PostDetalle = Omit<PostType, "comentarios"> & {
    comentarios: Comentario[];
    descripcion: string;
    fecha: Date;
}



