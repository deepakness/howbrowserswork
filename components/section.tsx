export default function Section({
    title,
    children,
    id,
}: {
    title: string;
    children: React.ReactNode;
    id?: string;
}) {
    return (
        <section
            id={id}
            data-section-id={id}
            className="flex scroll-mt-24 flex-col space-y-4"
        >
            <h2 className="font-serif text-2xl font-semibold leading-10 tracking-tight text-black">
                {title}
            </h2>
            <div className="space-y-4">{children}</div>
        </section>
    );
}
