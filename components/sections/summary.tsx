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
            <p>
                That is it! If you completed all the examples, you should have a
                clear mental model of how browsers work.
            </p>
            <p>Thank you for reading the guide, I hope you enjoyed it.</p>
        </Section>
    );
}
