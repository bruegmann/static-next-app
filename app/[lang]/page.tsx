import { Language, getPhrase } from "@/lib/translations"
import dynamic from "next/dynamic"

const LanguageSwitch = dynamic(() => import("@/components/language-switch"), {
    ssr: false
})

export default function HomeLang({ params }: { params: { lang: Language } }) {
    return (
        <>
            <LanguageSwitch />

            <div className="container mx-auto">
                <h1 className="page-header">
                    {getPhrase("HELLO_WORLD", params.lang)}, {params.lang}
                </h1>

                <a href="about" className="link">
                    About
                </a>
            </div>
        </>
    )
}
