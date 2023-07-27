
import dataContact from "../data/dataContact"

const Contact = () => {
    return (
        <>
            <h1 className="mt-5 font-medium text-xl text-center font-['Inter']">Contacto</h1>
            <div className="grid grid-cols-2 mr-4 ml-4 gap-2 mb-4">
                {
                    dataContact.map(person => (
                        <div key={person.id} className="flex flex-col justify-center items-center w-full p-2 rounded-md shadow-boxshadowHistory mt-5">
                            <div className="mb-2">
                                <img src={person.imagen} alt="" className="rounded-full w-[75px] h-[76px]" />
                            </div>
                            <div className="flex flex-col items-center font-['Inter']">
                                <p className="text-base font-semibold">{person.name}</p>
                                <span className="text-base font-medium">{person.rol}</span>

                                <div className="flex gap-2 mt-1">
                                    <a href={person.link1} target="_blank">
                                        <img src={person.linkdln} alt="profile" />
                                    </a>
                                    <a href={person.link2} target="_blank">
                                        <img src={person.github} alt="profile" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Contact
