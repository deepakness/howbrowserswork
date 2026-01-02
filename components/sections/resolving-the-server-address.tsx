import ExampleContainer from "../example-container";
import ResolveServerAddressExample from "../examples/resolve-server-address-example";
import Section from "../section";
import Highlight from "../highlight";

type SectionProps = {
    sectionId?: string;
    title?: string;
};

export default function ResolvingTheServerAddress({
    sectionId = "resolving-the-server-address",
    title = "Resolving the server address",
}: SectionProps) {
    return (
        <Section id={sectionId} title={title}>
            <p>
                Browsers can&apos;t send requests to names like{" "}
                <Highlight variant="slate">example.com</Highlight>.
            </p>
            <p>
                Computers talk to IP addresses, so the browser first asks the
                DNS system to resolve the domain name into an IP address before
                it can connect to the server and send the HTTP request.
            </p>
            <p>
                Type a domain name in the input and press <kbd>Enter</kbd> to
                resolve it into an IP address:
            </p>
            <ExampleContainer>
                <ResolveServerAddressExample />
            </ExampleContainer>
        </Section>
    );
}
