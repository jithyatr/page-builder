const blockSchemas = {
  id: "preview_1",
  title: "Preview Page",
  blocks: [
    {
      id: "p1",
      type: "heroclassic",
      title: "Hero Classic",
      preview: "/images/heroclassic.png",
      props: {
        title: "Welcome to Our Platform",
        titleColor: "#1D4ED8",
        subtitle: "Transform your business with our innovative solutions. Get started today and see the difference.",
        subtitleColor: "#4B5563",
        buttonText: "Get Started",
        background: "#EEF2FF",
        buttonBg: "#2563EB",
        buttonTextColor: "#FFFFFF",
        image: "https://www.jpwebagency.com/assets/banner.jpeg",
      }
    },
    {
      id: "p2",
      type: "whychooseus",
      title: "Why choose us",
      preview: "/images/whychooseus.png",
      props: {
        title: "Why Choose Us",
        titleColor: "#059669",
        background: "#ECFDF5",
        items: [
          {
            id: "f1",
            title: "Lightning Fast",
            titleColor: "#DC2626",
            description: "Experience blazing-fast performance with our optimized infrastructure.",
            descriptionColor: "#4B5563"
          },
          {
            id: "f2",
            title: "Secure & Reliable",
            titleColor: "#2563EB",
            description: "Enterprise-grade security with 99.9% uptime guarantee.",
            descriptionColor: "#4B5563"
          },
          {
            id: "f3",
            title: "24/7 Support",
            titleColor: "#7C3AED",
            description: "Round-the-clock support from our expert team.",
            descriptionColor: "#4B5563"
          }
        ]
      }
    },
    {
      id: "p3",
      type: "commoncta",
      title: "Hero Classic",
      preview: "/images/commoncta.png",
      props: {
        title: "Ready to Get Started?",
        titleColor: "#FFFFFF",
        subtitle: "Join thousands of satisfied customers and transform your business today.",
        subtitleColor: "#E5E7EB",
        buttonText: "Start Now",
        background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
        buttonBg: "#FFFFFF",
        buttonTextColor: "#8B5CF6",
      }
    },
    {
      id: "p4",
      type: "testimonial",
      title: "Testimonial",
      preview: "/images/testimonial.png",
      props: {
        title: "What Our Customers Say",
        titleColor: "#111827",
        subtitle: "Don't just take our word for it. Here's what real customers are saying about their experience.",
        subtitleColor: "#6B7280",
        buttonText: "Read More Reviews",
        background: "#F9FAFB",
        buttonBg: "#111827",
        buttonTextColor: "#FFFFFF",
        items: [
          {
            id: "t1",
            title: "Sarah Johnson",
            titleColor: "#DC2626",
            role: "Marketing Manager",
            feedback:
              "This service completely exceeded my expectations. The process was seamless, and the support team was always available to help!",
          },
          {
            id: "t2",
            title: "David Lee",
            titleColor: "#DC2626",
            role: "Entrepreneur",
            feedback:
              "I’ve tried many platforms before, but this is the first one that feels intuitive and truly delivers results.",
          },
          {
            id: "t3",
            title: "Emily Carter",
            titleColor: "#DC2626",
            role: "Product Designer",
            feedback:
              "Beautifully designed and easy to use. I recommend it to anyone who wants to grow their business efficiently.",
          },

        ]
      }
    },
    {
      id: "p5",
      type: "aboutus",
      title: "About us",
      preview: "/images/aboutus.png",
      props: {
        title: "About Our Company",
        titleColor: "#1F2937",
        subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        subtitleColor: "#4B5563",
        background: "#EEF2FF",
        image: "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
      },
    },
  ]
};

export default blockSchemas;