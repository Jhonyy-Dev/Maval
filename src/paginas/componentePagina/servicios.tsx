const posts = [
    {
      id: "post-1",
      title: "Web System Development",
      summary:
        "We create custom web systems for businesses and enterprises. From management systems to cloud-based platforms, we develop efficient and scalable solutions.",
      url: "#",
      image:
        "https://cdn.dribbble.com/users/3777498/screenshots/16012965/media/f7f3dedbd63158b3424b1ee398a53ea9.png",
    },
    {
      id: "post-2",
      title: "Website Creation",
      summary:
        "We design and develop modern, optimized, and responsive websites. From corporate pages to online stores, we create engaging digital experiences.",
      url: "#",
      image: "https://cdn.dribbble.com/users/2478245/screenshots/17384523/media/10cb2adfa4baaf7d29e014138d38c93d.png",
    },
    {
      id: "post-3",
      title: "Chatbot Development",
      summary:
        "We develop AI-powered chatbots that enhance customer interactions. Utilizing natural language processing, our chatbots provide intelligent responses, automate tasks, and offer 24/7 support for businesses across various industries.",
      url: "#",
      image:
        "https://www.globaltechcouncil.org/wp-content/uploads/2021/09/Top-10-benefits-of-adding-a-chatbot-on-your-website-2.jpg",
    },
    {
      id: "post-4",
      title: "Software Development",
      summary:
        "We develop cutting-edge software solutions using state-of-the-art tools and frameworks. Our expert team leverages modern technologies to create efficient, scalable, and robust applications tailored to meet diverse business needs.",
      url: "#",
      image: "https://i0.wp.com/www.uxcale.com/wp-content/uploads/2023/08/Escalabilidad-de-negocio.jpeg?resize=1024%2C683&ssl=1",
    },
    {
      id: "post-5",
      title: "E-Commerce Development",
      summary:
        "We specialize in tailored e-commerce solutions, adapting our development approach based on the target audience and company size. From small boutique shops to large-scale marketplaces, we create web platforms that optimize online shopping experiences, ensuring scalability, security, and user-friendliness for diverse business needs.",
      url: "#",
      image:
        "https://i.ytimg.com/vi/P8YuWEkTeuE/maxresdefault.jpg",
    },
  ];
  
  const Servicios = () => {
    return (
      <section id="Servicios" className="py-16">
        <div className="container flex flex-col items-center gap-8">
          {/* Title and description */}
          <div className="text-center">
            <h2 className="mb-2 text-center text-3xl font-mono lg:text-4xl text-[#000000]">
              <span className="underline-decoration">Our Services</span>
            </h2>
            <p className="text-muted-foreground lg:text-lg text-md mt-2">
              Digital solutions for your business
            </p>
          </div>
  
          {/* Services list */}
          <div className="flex flex-col gap-y-16 lg:gap-y-20">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 rounded-3xl"
                    />
                  </div>
                </div>
  
                {/* Service info */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="lg:text-4xl text-2xl font-semibold text-[#564FCC]">
                    {post.title}
                  </h3>
                  <p className="lg:text-lg text-sm text-muted-foreground my-4 ">
                    {post.summary}
                  </p>
                  {/* <a
                    href={post.url}
                    className="text-[#564FCC] text-lg font-semibold hover:underline"
                  >
                    Learn More →
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Servicios;