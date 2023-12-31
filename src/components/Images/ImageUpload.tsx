import { ChangeEvent, useState, useEffect } from "react"

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null
        setSelectedImage(file)

        console.log(selectedImage)

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setImagePreview(reader.result as string)
            reader.readAsDataURL(file)
        } else {
            setImagePreview(null)
        }
    }

    useEffect(() => {
        localStorage.setItem("URL", `${imagePreview}`)
        if(localStorage.getItem("URL") === "null") {
            localStorage.setItem("imagen", "false")
        } else {
            localStorage.setItem("imagen", "true")
        }
    }, [imagePreview])

    return (
        <>
            <label htmlFor="image-upload" className="cursor-pointer absolute top-0 right-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.7 14.3L21.7 15.3L19.7 13.3L20.7 12.3C20.8 12.2 20.9 12.1 21.1 12.1C21.2 12.1 21.4 12.2 21.5 12.3L22.8 13.6C22.9 13.8 22.9 14.1 22.7 14.3ZM13 19.9V22H15.1L21.2 15.9L19.2 13.9L13 19.9ZM11.21 15.83L9.25 13.47L6.5 17H13.12L15.66 14.55L13.96 12.29L11.21 15.83ZM11 19.9V19.05L11.05 19H5V5H19V11.31L21 9.38V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C3.9 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H11V19.9Z" fill="black"/>
                </svg>
            </label>
            <input type="file" id="image-upload" accept="image/*" capture="user" onChange={handleImageUpload} className="hidden" />
        </>
    )
}

export default ImageUpload
