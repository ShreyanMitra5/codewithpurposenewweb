import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Sparkles, Heart } from "lucide-react"

export default function JoinPage() {
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
                            <Link href="/donate" className="text-gray-700 hover:text-green-800 transition-colors">
                                Donate
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-green-800 transition-colors">
                                Contact
                            </Link>
                        </div>

                        <Button className="bg-green-800 hover:bg-green-900 text-white font-medium" asChild>
                            <Link href="/join">Join Our Mission</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


                    <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 mb-6">Join Our Mission</h1>
                    <p className="text-xl text-green-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Ready to make a difference? Fill out the form below to get started with CodeWithPurpose. We can't wait to have you on board!
                    </p>
                </div>
            </section>

            {/* Form Container */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full">
                        {/* The Form */}
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-[800px] flex items-center justify-center">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSds7PfwABn6UvSnUP_P_AW5EZ4vx74k98YOJw0K0fTAZMzIGw/viewform?embedded=true"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                className="w-full h-full"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
