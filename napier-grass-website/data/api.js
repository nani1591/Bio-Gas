const solutionsData = [
  { id: 1, title: "⚙ Biogas Plants", description: "Convert biodegradable feedstock into renewable gas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7c-tPQkaB6EKTgs0ZlXPQShg_4g6_5NqaK4Di9Z3gTjIz2X7HSB-t0g&s=10" },
  { id: 2, title: "♨ Gas Purification ", description: "Explore advanced biotech treatment options for raw biogas.", image: "https://www.jogwte.com/wp-content/uploads/2018/04/Natural_Gas_Upgradation_System_Purification_Plant.jpg" },
  { id: 3, title: "🚚 Bio-CNG / CBG", description: "Consider upgrading for suitable gas applications.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FxKHP6K0vrWJnO7Zj7uKpcnx-pcGa32KbXrC3wxb9A&s=10" }
];

const processSteps = [
  { step: 1, title: "Collect & Prepare", description: "Sort and prepare organic material." },
  { step: 2, title: "Anaerobic Digestion", description: "Microorganisms produce biogas without oxygen." },
  { step: 3, title: "Clean & Use", description: "Treat gas for its intended application." }
];

export const fetchSolutions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(solutionsData), 300); 
  });
};

export const fetchProcessSteps = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(processSteps), 300);
  });
};

export const submitContactForm = async (formData) => {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL?.trim();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim();

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...formData, source: "website-contact-form" }),
    });
    if (!response.ok) throw new Error("Your enquiry could not be sent. Please try again later.");
    return { success: true, message: "Enquiry submitted successfully." };
  }

  if (contactEmail) {
    const subject = `Website enquiry: ${formData.projectType}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Project requirement: ${formData.projectType}`,
      "",
      "Project details:",
      formData.message,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailto);
    return { mailtoOpened: true, message: "Your email app was opened with the enquiry prepared. Send it from your email app to complete delivery." };
  }

  throw new Error("Contact form delivery is not configured yet. Add VITE_CONTACT_API_URL (backend) or VITE_CONTACT_EMAIL in your deployment environment.");
};

export const fetchProcessPageData = async () => ({
  steps: processSteps,
  performanceInfo: "Feedstock composition, moisture, pre-treatment, temperature and plant design all matter.",
});