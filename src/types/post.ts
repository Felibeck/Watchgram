import type { Comentario } from "./comentario";

export type Post = {
    foto: string;
    cantLikes: number;
    comentarios: Array<Comentario>;
    descripcion: string;
    fecha: Date;
}