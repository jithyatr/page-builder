const pageData = {
  id: "page_1",
  title: "Landing Page",
  blocks: [
    {
      id: "b1",
      type: "hero",
      props: {
        title: "Welcome to My Page",
        titleColor: "#1D4ED8",
        subtitle: "Build beautiful pages with React Page Builder",
        subtitleColor: "#4B5563",
        buttonText: "Get Started",
        background: "#EEF2FF",
        buttonBg: "#2563EB",
        buttonTextColor: "#FFFFFF"
      }
    },
    {
      id: "b2",
      type: "features",
      props: {
        title: "Our Awesome Features",
        titleColor: "#1D4ED8",
        background: "#ECFDF5",
        items: [
          {
            id: "i1",
            title: "Fast",
            titleColor: "#2563EB",
            description: "Optimized for speed and performance.",
            descriptionColor: "#4B5563"
          },
          {
            id: "i2",
            title: "Customizable",
            titleColor: "#059669",
            description: "Easily edit and adapt components.",
            descriptionColor: "#4B5563"
          },
          {
            id: "i3",
            title: "Open Source",
            titleColor: "#9333EA",
            description: "Free and open for developers to use.",
            descriptionColor: "#4B5563"
          }
        ]
      }
    },
    {
      id: "b3",
      type: "common",
      props: {
        title: "Ready to build your page?",
        titleColor: "#9333EA",
        subtitle: "Start customizing your template now.",
        subtitleColor: "#4B5563",
        buttonText: "Try It Free",
        background: "#EEF2FF",
        buttonBg: "#FFFFFF",
        buttonTextColor: "#2563EB"
      }
    },
    {
      id: "b4",
      type: "slider",
      props: {
        title: "Our Gallery",
        titleColor: "#1D4ED8",
        background: "#FFFFF",
        autoplay: true,
        interval: 3000,
        images: [
          {
            id: "s1",
            src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
            alt: "Slide 1"
          },
          {
            id: "s2",
            src: "https://thumbs.dreamstime.com/b/beautiful-view-nature-mountains-near-konigssee-lake-bavaria-germany-blue-sky-clouds-97444419.jpg",
            alt: "Slide 2"
          },
          {
            id: "s3",
            src: "https://thumbs.dreamstime.com/b/bavarian-alps-beautiful-flowers-watzmann-springtime-bavaria-germany-panoramic-view-landscape-famous-mountain-62881385.jpg",
            alt: "Slide 3"
          },
          {
            id: "s4",
            src: "https://st2.depositphotos.com/1718692/6151/i/450/depositphotos_61517593-stock-photo-flowers-on-hillside-meadow-with.jpg",
            alt: "Slide 4"
          }
        ]
      }
    },
    {
      id: "b5",
      type: "footer",
      props: {
        text: "© 2025 My Page Builder. All rights reserved.",
        background: "#1F2937",
        textColor: "#D1D5DB"
      }
    }
  ]
};

export default pageData;
