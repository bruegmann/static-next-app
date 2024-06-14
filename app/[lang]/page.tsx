import { Language, getPhrase } from "@/lib/translations"
import dynamic from "next/dynamic"
import Image from "next/image"
import VercelLogo from "@/lib/vercel.svg"

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

                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={200}
                    height={200}
                />

                <Image
                    src={VercelLogo}
                    alt="Vercel Logo"
                    width={200}
                    height={200}
                />
            </div>
        </>
    )
}
