import ExampleContainer from "@/components/example-container";
import UrlToHttpExample from "@/components/examples/url-to-http-example";
import Section from "@/components/section";

export default function TurningAUrlIntoAnHttpRequest() {
    return (
        <Section title="Turning a URL into an HTTP request">
            <p>
                Once we know the exact URL we want to visit, we can send a
                request to the server to fetch the resource and display it in
                the browser. Browsers communicate with servers using the HTTP
                protocol.
            </p>
            <p>
                To see how a URL is translated into an HTTP request format,
                enter a full URL like https://example.com and press{" "}
                <kbd>Enter</kbd> (or click the "Go" button):
            </p>
            <ExampleContainer>
                <UrlToHttpExample />
            </ExampleContainer>
        </Section>
    );
}
