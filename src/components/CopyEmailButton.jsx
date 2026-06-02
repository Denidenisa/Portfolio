import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const CVButton = ({ lang, href, filename }) => {
    const [downloaded, setDownloaded] = useState(false)

    const labels = {
        fr: { idle: 'Feuilleter mon CV', done: 'CV téléchargé !', flag: '🇫🇷' },
        en: { idle: 'Browse my Resume', done: 'CV downloaded!', flag: '🇬🇧' },
    }

    const downloadCV = () => {
        const link = document.createElement('a')
        link.href = href
        link.download = filename
        link.click()
        setDownloaded(true)
        setTimeout(() => setDownloaded(false), 2000)
    }

    return (
        <motion.button
            onClick={downloadCV}
            whileHover={{ y: -9 }}
            whileTap={{ scale: 1.15 }}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {downloaded ? (
                    <motion.p
                        key="done"
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: 'easeInOut' }}
                    >
                        <img src="/assets/copy-done.svg" className="w-5" alt="done" />
                        {labels[lang].done}
                    </motion.p>
                ) : (
                    <motion.p
                        key="idle"
                        className="flex items-center justify-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <img src="/assets/copy.svg" className="w-5" alt="download" />
                        <span>{labels[lang].flag}</span>
                        {labels[lang].idle}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

const DownloadCVButton = () => {
    return (
        <div className="flex items-center gap-4">
            <CVButton
                lang="fr"
                href="/assets/cv-fr.pdf"
                filename="CV-Denisa-FR.pdf"
            />
            <CVButton
                lang="en"
                href="/assets/cv-en.pdf"
                filename="CV-Denisa-EN.pdf"
            />
        </div>
    )
}

export default DownloadCVButton