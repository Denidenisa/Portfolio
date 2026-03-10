import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const DownloadCVButton = () => {      
    const [downloaded, setDownloaded] = useState(false)

    const downloadCV = () => {
        const link = document.createElement('a')
        link.href = '/assets/cv.pdf'
        link.download = 'CV-Denisa.pdf'
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
                        className="flex items-center justify-center gap-2"
                        key="downloaded"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                         <img src="/assets/copy-done.svg" className="w-5" alt="done icon" />
                        CV téléchargé !
                    </motion.p>
                ) : (
                    <motion.p
                        className="flex items-center justify-center gap-1"
                        key="download"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <img src="/assets/copy.svg" className="w-5" alt="download icon" />
                        Feuilleter mon CV
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default DownloadCVButton