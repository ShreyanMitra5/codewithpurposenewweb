import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft, ShieldCheck, Globe, Zap } from "lucide-react"

export default function DonatePage() {
    return (
        <div className="min-h-screen bg-green-50 font-light tracking-tight antialiased">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center space-x-2">
                                <Image src="/codewp-logo.png" alt="CodeWithPurpose Logo" width={32} height={32} className="w-8 h-8" />
                                <span className="text-xl font-medium text-green-800">CodeWithPurpose</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-green-800 transition-colors">
                                Home
                            </Link>
                            <Link href="/programs" className="text-gray-700 hover:text-green-800 transition-colors">
                                Programs
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-green-800 transition-colors">
                                About
                            </Link>
                            <Link href="/donate" className="text-green-800 font-medium">
                                Donate
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-green-800 transition-colors">
                                Contact
                            </Link>
                        </div>

                        <Button className="bg-green-800 hover:bg-green-900 text-white" asChild>
                            <Link href="/join">Join Our Mission</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 mb-6">Support Our Mission</h1>
                        <p className="text-xl text-green-600 leading-relaxed max-w-2xl mx-auto font-light">
                            Your donations allow us to continue providing free coding education across 100+ countries and support local charities globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact & Donate Section */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 items-center justify-center flex overflow-hidden">
                        <iframe
                            src="https://hcb.hackclub.com/donations/start/code-with-purpose"
                            style={{ border: 'none', borderRadius: '1rem' }}
                            name="donateFrame"
                            scrolling="no"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            height="850px"
                            width="100%"
                            className="max-w-[512px]"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>


        </div>
    )
}
