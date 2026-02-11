import KnowYourselfClient from "./KnowYourselfClient";

export const metadata = {
    title: "Know Yourself",
    description: "Career guidance and self-assessment tools by Bharathaksha Foundation to help you identify your strengths and suitable career paths.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function KnowYourselfPage() {
    return <KnowYourselfClient />;
}
