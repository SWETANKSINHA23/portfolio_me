import emailjs from "@emailjs/browser";

// Replace these with your actual EmailJS keys
// You can get these by signing up at https://www.emailjs.com/
export const EMAILJS_CONFIG = {
    SERVICE_ID: "service_pdhyi1i",
    TEMPLATE_ID: "template_z2n2i69",
    PUBLIC_KEY: "yD2FaBQNw9hgalWNP",
};

export const sendEmail = async (templateParams: Record<string, unknown>) => {
    if (
        EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
        throw new Error(
            "Please configure your EmailJS credentials in src/lib/email.ts"
        );
    }

    return emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
    );
};
