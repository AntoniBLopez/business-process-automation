export const APP_CONFIG = {
  companyName: "Automation Services",
  email: "antonilopezdev@gmail.com",
  phoneNumber: "+34691788761",
  founderName: "Antoni",
  location: "Barcelona, Spain",
  bookingUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/your-calendly/intro-call",
}

export type AppConfig = typeof APP_CONFIG;
