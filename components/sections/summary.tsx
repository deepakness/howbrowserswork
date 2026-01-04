import Section from "../section";

export default function SummarySection({
    sectionId = "summary",
    title = "Summary",
}: {
    sectionId?: string;
    title?: string;
}) {
    return (
        <Section id={sectionId} title={title}>
            <p>This is a summary of the guide.</p>
        </Section>
    );
}
