const posts = [
    {
      id: "post-1",
      title: "Web System Development",
      summary:
        "We create custom web systems for businesses and enterprises. From management systems to cloud-based platforms, we develop efficient and scalable solutions.",
      url: "#",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MRQn6xaFRsT_GnOzByo-C9vOud3EZlPWNQ&s",
    },
    {
      id: "post-2",
      title: "Website Creation",
      summary:
        "We design and develop modern, optimized, and responsive websites. From corporate pages to online stores, we create engaging digital experiences.",
      url: "#",
      image: "data:image/jpeg;base64,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",
    },
  ];
  
  const Servicios = () => {
    return (
      <section className="py-20">
        <div className="container flex flex-col items-center gap-16">
          {/* Title and description */}
          <div className="text-center">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl text-[#564FCC]">
              Our Services
            </h2>
            <p className="text-muted-foreground text-xl mt-2">
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
                  <h3 className="text-3xl font-semibold text-[#564FCC]">
                    {post.title}
                  </h3>
                  <p className="text-lg text-muted-foreground my-4 ">
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
  