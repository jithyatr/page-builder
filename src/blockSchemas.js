// blockSchemas.js
export const blockSchemas = {
  hero: [
    {
      id: "hero_default",
      label: "Hero with Image",
      image: "/images/hero.png",
      props: {
        title: "Welcome to My Page",
        subtitle: "Build beautiful pages fast",
        buttonText: "Get Started",
        background: "#EEF2FF",
        titleColor: "#1D4ED8",
        subtitleColor: "#4B5563",
        buttonBg: "#2563EB",
        buttonTextColor: "#FFFFFF",
        image: "https://www.jpwebagency.com/assets/banner.jpeg",
      },
    },
    {
      id: "hero_minimal",
      label: "Minimal Hero",
      image: "/images/hero.png",
      props: {
        title: "Hello World",
        subtitle: "Simple & clean hero section",
        buttonText: "Learn More",
        background: "#FFFFFF",
        titleColor: "#111827",
        subtitleColor: "#6B7280",
        buttonBg: "#111827",
        buttonTextColor: "#FFFFFF",
        image: "",
      },
    },
  ],

  features: [
    {
      id: "features_three",
      label: "Three Features",
      image: "/images/features.png",
      props: {
        title: "Our Features",
        titleColor: "#1D4ED8",
        background: "#ECFDF5",
        items: [
          { id: "i1", title: "Fast", titleColor: "#2563EB", description: "Quick and reliable", descriptionColor: "#4B5563" },
          { id: "i2", title: "Customizable", titleColor: "#059669", description: "Fully configurable", descriptionColor: "#4B5563" },
          { id: "i3", title: "Open Source", titleColor: "#9333EA", description: "Community driven", descriptionColor: "#4B5563" },
        ],
      },
    },
    {
      id: "features_grid",
      label: "Feature Grid",
      image: "/images/features.png",
      props: {
        title: "Why choose us?",
        titleColor: "#1D4ED8",
        background: "#FFFFFF",
        items: [
          { id: "i1", title: "Speed", titleColor: "#2563EB", description: "Lightning fast", descriptionColor: "#4B5563" },
          { id: "i2", title: "Secure", titleColor: "#059669", description: "Your data is safe", descriptionColor: "#4B5563" },
          { id: "i3", title: "Flexible", titleColor: "#9333EA", description: "Adapt to your needs", descriptionColor: "#4B5563" },
          { id: "i4", title: "Modern", titleColor: "#F59E0B", description: "Latest technologies", descriptionColor: "#4B5563" },
        ],
      },
    },
  ],

  // you can add common, slider, footer variations too
};
