"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const scrollPrev = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const hasMultipleImages = project.images && project.images.length > 1;
    const hasImages = project.images && project.images.length > 0;

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "unset";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
            if (e.key === "ArrowLeft") setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen, project.images.length]);

    return (
        <>
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full group">
                {/* Image Area */}
                <div className="relative h-64 w-full bg-black/40 overflow-hidden cursor-pointer" onClick={() => hasImages && openModal(0)}>
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
                                    <div className="embla__slide flex-[0_0_100%] min-w-0 relative" key={idx} onClick={(e) => { e.stopPropagation(); openModal(idx); }}>
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
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10 opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10 opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    ) : (
                        // Single Image
                        <div className="relative h-full w-full" onClick={() => openModal(0)}>
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

            {/* Lightbox Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={closeModal}>
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                        {hasImages && (
                            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                <Image
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - View ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    priority
                                    quality={95}
                                />

                                {hasMultipleImages && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
                                        >
                                            <ChevronLeft size={32} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
                                        >
                                            <ChevronRight size={32} />
                                        </button>

                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                                            {currentImageIndex + 1} / {project.images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
