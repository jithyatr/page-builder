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
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        subtitleColor: "#4B5563",
        buttonText: "Get Started",
        background: "#EEF2FF",
        buttonBg: "#2563EB",
        buttonTextColor: "#FFFFFF",
        image: "https://www.jpwebagency.com/assets/banner.jpeg",
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
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
            descriptionColor: "#4B5563"
          },
          {
            id: "i2",
            title: "Customizable",
            titleColor: "#059669",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
            descriptionColor: "#4B5563"
          },
          {
            id: "i3",
            title: "Open Source",
            titleColor: "#9333EA",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
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
        subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..comes from a line in section 1.10.32.",
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
        subtitle: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        subtitleColor: "#059669",
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
