import Section from "../section";

export default function AboutSection({
    sectionId = "about",
}: {
    sectionId?: string;
    title?: string;
}) {
    return (
        <Section id={sectionId} title={undefined}>
            <p>
                The goal of the guide is to develop an intuition of how browsers
                work. For that, I developed tiny interactive examples you can
                play with.
            </p>
            <p>
                However, to keep the guide short and straight to the point, I
                omitted many critical details like different versions of the
                HTTP protocol, SSL, TLS, nuances of the DNS, and many more.
            </p>
            <p>
                It might be a bit technical at times, but I will continue to
                improve it until it becomes accessible to people with any
                background and stops lacking all the details.
            </p>
        </Section>
    );
}
