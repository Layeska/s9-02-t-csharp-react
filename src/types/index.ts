export type UserAccount = {
  [key: string]: any;
};
export interface UserRegister {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    nombre: string;
    apellido: string;
    message: string;
  }
  
  export interface UserLogin {
    email: string;
    password: string;
    message: string;
  }
  export default interface Profesion {
    precio_Desde: number;
    ofertaId: number;
    nombre: string;
    estrellas: number;
    subtitulo: string;
    oferta_Id: number;
  }
  export default interface Proveedor {
    ofertaId: number;
    proveedor_Nombre: string;
    estrellas: number;
    subtitulo: string;
    precio_Base: number;
    oferta_Id: number;
    categoria_Id: number;
  }

  export default interface ProveedorInfo {
    id: number,
    oferta_Id: number,
    categoria: string,
    descripcion: string,
    imagen_Portada: string,
    precio_Base: number,
    proveedor_Id: number,
    proveedor_Nombre: string
  }
  