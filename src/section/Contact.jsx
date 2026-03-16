import { useState } from "react"
import emailjs from "@emailjs/browser"
import { AnimatePresence } from "motion/react"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 4000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await emailjs.send(
                "service_rzl8a4d",
                "template_f52mx2p",
                {
                    from_name: formData.name,
                    to_name: "Denisa",
                    from_email: formData.email,
                    to_email: "dev.furtunadenisa@gmail.com",
                    message: formData.message,
                },
                "bSQVMtXUBmnx-uxR6"
            )
            showAlertMessage("success", "✨ Votre message vogue entre les étoiles vers mon astéroïde...")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.log(error)
            showAlertMessage("danger", "🪐 Les vents cosmiques ont emporté votre message. Réessayez.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="relative c-space section-spacing" id="contact">
            <Particles
                className="absolute inset-0 -z-50"
                quantity={120}
                ease={80}
                color={"#ffffff"}
                refresh
            />

            <AnimatePresence>
                {showAlert && <Alert type={alertType} text={alertMessage} />}
            </AnimatePresence>

         
            <div className="mb-12">
                <h2 className="text-heading">Envoyer un message d'astéroïde</h2>
                <p className="mt-3 text-neutral-400 max-w-xl">
                    Que vous souhaitiez créer une nouvelle planète (un site), faire briller votre constellation actuelle ou donner vie à un projet singulier, je suis là pour vous accompagner.
                </p>
            </div>

            <form className="w-full" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                        <label htmlFor="name" className="field-label">Nom complet</label>
                        <input
                            id="name" name="name" type="text"
                            className="field-input field-input-focus"
                            placeholder="Petit Prince"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="field-label">Email</label>
                        <input
                            id="email" name="email" type="email"
                            className="field-input field-input-focus"
                            placeholder="PetitPrince@gmail.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                
                <div className="mb-8">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea
                        id="message" name="message" rows="6"
                        className="field-input field-input-focus"
                        placeholder="Décrivez le voyage que nous pourrions créer ensemble…"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="italic text-sm text-neutral-500 max-w-sm">
                        🌹 "On ne voit bien qu'avec le cœur."
                        <span className="block not-italic text-xs text-neutral-600 mt-1">— Le Petit Prince</span>
                    </p>
                    <button
                        type="submit"
                        className="px-10 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-royal to-lavender hover-animation whitespace-nowrap"
                    >
                        {isLoading ? "Envoi en cours..." : "Envoyer vers mon astéroïde 🚀"}
                    </button>
                </div>
            </form>
        </section>
    )
}
export default Contact