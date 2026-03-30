import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Img,
    Heading,
    Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    : "http://localhost:3000";

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
    name,
    email,
    message,
}) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/logo.png`}
                    width="200"
                    height="66"
                    alt="Iron Tech Data Logo"
                    style={logo}
                />
                <Heading style={heading}>New Contact Form Submission</Heading>
                <Section style={section}>
                    <Text style={text}>
                        <strong>Name:</strong> {name}
                    </Text>
                    <Text style={text}>
                        <strong>Email Address:</strong> {email}
                    </Text>
                    <Hr style={hr} />
                    <Text style={text}>
                        <strong>Message:</strong>
                    </Text>
                    <Text style={messageText}>{message}</Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 24px 48px",
    marginBottom: "64px",
};

const logo = {
    margin: "0 auto",
    padding: "20px 0",
    objectFit: "contain" as const,
};

const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "600",
    color: "#484848",
    padding: "17px 0 0",
    textAlign: "center" as const,
};

const section = {
    margin: "0",
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "10px",
};

const text = {
    fontSize: "16px",
    margin: "12px 0",
    color: "#3c3f44",
    textAlign: "left" as const,
};

const messageText = {
    fontSize: "16px",
    margin: "12px 0",
    color: "#3c3f44",
    textAlign: "left" as const,
    whiteSpace: "pre-wrap" as const,
    background: "#f9f9f9",
    padding: "16px",
    borderRadius: "6px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};
