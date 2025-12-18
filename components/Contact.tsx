import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {

    const { personalInfo } = portfolioData;

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <Mail size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <Phone size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <span>{personalInfo.phone}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <MapPin size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Address</p>
                                    <span>{personalInfo.address}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
                            <a href={personalInfo.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                <Github size={20} /> Github
                            </a>
                            <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input type="text" id="name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input type="email" id="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Tell me about your project..." />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
