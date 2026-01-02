import ExampleContainer from "@/components/example-container";
import Section from "@/components/section";
import ReturnHttpResponse from "@/components/examples/return-http-response";

type SectionProps = {
    sectionId?: string;
    title?: string;
};

const request = `GET / HTTP/1.1
Host: example.com
Accept: text/html
`;

export default function HttpRequestAndResponse({
    sectionId = "http-request-and-response",
    title = "HTTP requests and responses",
}: SectionProps) {
    return (
        <Section id={sectionId} title={title}>
            <p>
                Once the TCP connection is established, the browser can send an
                HTTP request to the server:
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg">
                <code>{request}</code>
            </pre>
            <p>
                The server processes the request and returns an HTTP response.
            </p>
            <ExampleContainer>
                <ReturnHttpResponse />
            </ExampleContainer>
        </Section>
    );
}
