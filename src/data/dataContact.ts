import { Contact } from "../types/dataContact.interface";
import Linkedln from "../assets/svg/Linkdln.svg"
import Behance from "../assets/img/behance.png"
import GitHub from "../assets/img/github.png"

const dataContact: Array<Contact> = [
    {
        id: 1,
        imagen: "https://ca.slack-edge.com/T032Y55Q6VC-U04F25MDN8N-fb5db9d44a56-512",
        name: "Ana Juárez",
        rol:"Dev. Front-End",
        linkdln: Linkedln,
        github: GitHub,
        link1: "https://www.linkedin.com/in/ana-juarez01/",
        link2: "https://github.com/Layeska"
    },
    {
        id: 3,
        imagen: "https://avatars.githubusercontent.com/u/133792310?v=4",
        name: "César Jurado",
        rol:"PM",
        linkdln: Linkedln,
        github: GitHub,
        link1: "https://www.linkedin.com/mwlite/in/cesarjuradoalvarado",
        link2: "https://github.com/cejurado"
    },
    {
        id: 4,
        imagen: "https://ca.slack-edge.com/T032Y55Q6VC-U04EV31ESQP-09edbbddde42-512",
        name: "Daniel Torres",
        rol:"Dev. Back-End",
        linkdln: Linkedln,
        github: GitHub,
        link1: "http://www.linkedin.com/in/daniel-torres-arango",
        link2: "https://github.com/DnTo"
    },
    {
        id: 5,
        imagen: "https://ca.slack-edge.com/T032Y55Q6VC-U054MEM60H4-1b6941a55e38-512",
        name: "Ever Rojas",
        rol:"Dev. Front-End",
        linkdln: Linkedln,
        github: GitHub,
        link1: "https://www.linkedin.com/in/ever-jose-rojas-perez-39aa0722a/",
        link2: "https://github.com/Everjr18 "
    },
    {
        id: 6,
        imagen: "https://ca.slack-edge.com/T032Y55Q6VC-U04F9DLU37U-365a35d22506-512",
        name: "Gerardo Vargas",
        rol:"Diseñador UX/UI",
        linkdln: Linkedln,
        github: Behance,
        link1: "https://www.linkedin.com/in/geravargas/",
        link2: "https://www.behance.net/geravargas"
    },
    {
        id: 7,
        imagen: "https://ca.slack-edge.com/T032Y55Q6VC-U04SL8022P4-261045c38a4a-512",
        name: "Maria Fernández",
        rol:"Diseñador UX/UI",
        linkdln: Linkedln,
        github: Behance,
        link1: "https://www.linkedin.com/in/belen-fernandez-morales/",
        link2: "https://www.behance.net/belenfernandezm"
    }
]

export default dataContact
