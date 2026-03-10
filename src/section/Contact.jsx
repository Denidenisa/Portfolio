
const Contact = ()=>{
    return(
        <section className="relative flex items-center c-space section-spacing">
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary ">
            <div className="flex flex-col items-start w-full gap-5 mb-10"><h2 className="text-heading">Envoyer un message d’astéroïde </h2><p className="font-normal text-neutral-400">Que vous souhaitiez créer une nouvelle planète (un site), faire briller votre constellation actuelle ou donner vie à un projet singulier, je suis là pour vous accompagner.</p>
            
            </div>
            <form className="w-full">
                <div className="mb-5">
                    <label htmlFor="name" className="feild-label"> Nom complet</label>
                    <input id="name" name="name" type="text" className="field-input field-input-focus"
                    placeholder="Petit Prince"
                    required></input>
                </div>
            </form>
            </div>
            
        </section>
    )
}
export default Contact