"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ProjectProps {
    project: {
        id: string;
        title: string;
        summary: string;
        bullets: string[];
        images: string[];
        tags: string[];
        links: {
            github: string | null;
            live: string | null;
        };
    };
}

export default function ProjectCard({ project }: ProjectProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const hasMultipleImages = project.images && project.images.length > 1;
    const hasImages = project.images && project.images.length > 0;

    return (
        <div className="bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full group">
            {/* Image Area */}
            <div className="relative h-64 w-full bg-black/40 overflow-hidden">
                {!hasImages ? (
                    // Placeholder
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <span className="text-gray-500 font-medium">No Image Available</span>
                    </div>
                ) : hasMultipleImages ? (
                    // Slider
                    <div className="embla overflow-hidden h-full" ref={emblaRef}>
                        <div className="embla__container flex h-full">
                            {project.images.map((src, idx) => (
                                <div className="embla__slide flex-[0_0_100%] min-w-0 relative" key={idx}>
                                    <Image
                                        src={src}
                                        alt={`${project.title} - ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Controls */}
                        <button
                            onClick={scrollPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                ) : (
                    // Single Image
                    <div className="relative h-full w-full">
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.links.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.summary}
                </p>

                {project.bullets.length > 0 && (
                    <ul className="mb-6 space-y-2">
                        {project.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-gray-500 text-sm flex items-start">
                                <span className="mr-2 text-blue-500">•</span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
