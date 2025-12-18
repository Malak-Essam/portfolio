import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {

    const { personalInfo } = portfolioData;

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-gray-400 text-lg mb-12">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6 flex flex-col items-center">
                        <div className="flex items-center gap-4 text-gray-300 w-full max-w-md bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-blue-600/10 rounded-full">
                                <Mail size={20} className="text-blue-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Email</p>
                                <a href={`mailto:${personalInfo.email}`} className="text-lg hover:text-white transition-colors block">{personalInfo.email}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 w-full max-w-md bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-blue-600/10 rounded-full">
                                <Phone size={20} className="text-blue-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Phone</p>
                                <span className="text-lg">{personalInfo.phone}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 w-full max-w-md bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-blue-600/10 rounded-full">
                                <MapPin size={20} className="text-blue-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Address</p>
                                <span className="text-lg">{personalInfo.address}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-8">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-lg">
                            <Github size={24} /> <span className="font-medium">Github</span>
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-lg">
                            <Linkedin size={24} /> <span className="font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
