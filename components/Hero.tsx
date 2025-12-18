import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Hero() {
    const { name, title, bio, github, linkedin, email } = portfolioData.personalInfo;

    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <div
                    className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6 animate-pulse"
                >
                    Available for Freelance & Full-time
                </div>

                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6 tracking-tight">
                    {name}
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
                    {title}
                </h2>

                <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                    {bio}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
                    >
                        View Work <ArrowRight size={20} />
                    </Link>

                    <div className="flex gap-4 items-center px-6">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${email}`} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
