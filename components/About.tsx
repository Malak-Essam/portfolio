import portfolioData from "@/data/portfolio.json";

export default function About() {
    const { skills } = portfolioData;

    return (
        <section id="about" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>

                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-default"
                        >
                            <span className="text-gray-300 font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
