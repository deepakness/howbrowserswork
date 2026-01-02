"use client";

import { useSectionsProgress } from "@/components/sections-progress";

type SectionSummary = {
    id: string;
    title: string;
};

export default function Sidebar({ sections }: { sections: SectionSummary[] }) {
    const { activeSectionId } = useSectionsProgress();

    return (
        <aside className="w-full lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-16">
                <p className=" text-slate-400 font-semibold font-serif">
                    Contents
                </p>
                <ul className="mt-4 space-y-2">
                    {sections.map((section) => {
                        const isActive = activeSectionId === section.id;
                        const linkClasses = ["block transition-colors"]
                            .filter(Boolean)
                            .join(" ");

                        return (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className={linkClasses}
                                    aria-current={isActive ? "true" : undefined}
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <span
                                            className={[
                                                "leading-5",
                                                isActive
                                                    ? "text-slate-900"
                                                    : "text-slate-600",
                                            ]
                                                .filter(Boolean)
                                                .join(" ")}
                                        >
                                            {section.title}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
