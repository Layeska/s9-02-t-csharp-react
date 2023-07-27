import Categoria1 from "../assets/svg/Logo1.svg"
import Categoria2 from "../assets/svg/Logo2.svg"
import Categoria3 from "../assets/svg/Logo3.svg"
import { AboutInter } from "../types/dataAbout.interface"

const dataAbout: Array<AboutInter> = [
  {
      imagen: Categoria1, title:"Categorias", description:"Selecciona entre las diferentes categorías disponibles para encontrar el servicio que necesites."
  },
  {
      imagen: Categoria2, title:"Valoraciones y reseñas", description:"Encuentra a los mejores profesionales en base a su valoración y reseñas de otras personas que hayan solicitado el servicio."
  },
  {
      imagen: Categoria3, title:"Pago de consulta", description:"Solo paga la consulta para que el profesional vaya hasta tu domicilio. Luego podrás aceptar si recibes o no el servicio."
  }
]

export default dataAbout