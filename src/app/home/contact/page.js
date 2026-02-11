import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with Bharathaksha Foundation. We are located in Udupi and Navi Mumbai. Reach out for volunteering, donations, or any inquiries.",
    openGraph: {
        title: "Contact Bharathaksha Foundation",
        description: "Contact us for inquiries about our healthcare and education initiatives.",
        url: "https://www.bharathaksha.org/home/contact",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
