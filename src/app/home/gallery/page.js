import GalleryClient from "./GalleryClient";

export const metadata = {
    title: "Photo Gallery",
    description: "View photos from Bharathaksha Foundation's events, healthcare camps, and education workshops. See our impact in action through our photo collection.",
    openGraph: {
        title: "Impact Gallery | Bharathaksha Foundation",
        description: "A visual journey of our work in education and healthcare across India.",
        url: "https://www.bharathaksha.org/home/gallery",
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
