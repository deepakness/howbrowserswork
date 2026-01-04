import ExampleContainer from "@/components/example-container";
import Highlight from "@/components/highlight";
import Section from "@/components/section";
import LayoutPaintCompositeExample from "@/components/examples/layout-paint-composite-example";

type SectionProps = {
    sectionId?: string;
    title?: string;
};

export default function LayoutPaintComposite({
    sectionId = "layout-paint-composite",
    title = "Layout, Paint, and Composite (The Rendering Pipeline)",
}: SectionProps) {
    return (
        <Section id={sectionId} title={title}>
            <p>
                Once the DOM and CSS are ready, the browser runs the rendering
                pipeline: <Highlight variant="blue">Layout</Highlight> (reflow)
                to calculate sizes and positions,
                <Highlight variant="slate">Paint</Highlight> to fill pixels,
                then <Highlight variant="blue">Composite</Highlight> to stitch
                layers together on the GPU.
            </p>
            <p>
                Not every change reruns every stage. Changing colors usually
                repaints, while changing sizes forces layout and paint to
                recompute.
            </p>
            <ExampleContainer>
                <LayoutPaintCompositeExample />
            </ExampleContainer>
            <p>
                This is why layout-heavy pages feel slower: more work needs to
                happen before the next frame can be shown.
            </p>
        </Section>
    );
}
