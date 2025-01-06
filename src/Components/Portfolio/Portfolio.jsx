import Card from "./Card";
import PageContainer from "../PageContainer";
const Projects = [
  {
    title: "Link Shortner",
    img: "https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600nw-2233924609.jpg",
    gh: "https://github.com/Mayanksaharkar/Link_Shortner",
    live: "https://mayanksaharkar.github.io/Link_Shortner/",
    description :"ReactJS | TailwindCSS | DaisyUI",
  }, {
    title: "Time Table Generator",
    img: "https://t4.ftcdn.net/jpg/04/97/10/59/360_F_497105958_MRp16tS0iI0u70hGsmP6Dxr9U1upOaVN.jpg",
    gh: "https://github.com/Mayanksaharkar/Time_Table_Generator",
    live: "https://mayanksaharkar.github.io/Link_Shortner/",
    description :"Andriod Studio | JAVA",
  }, {
    title: "Ecommerce Website",
    img: "https://media.istockphoto.com/id/1397445959/vector/3d-vector-render-online-shopping-bag-for-product-add-to-card-on-website-cartoon-icon.jpg?s=612x612&w=0&k=20&c=rYebgSm-rFSD7_BcYDOHcRa2SUrdJdZKZpUHiAxKiEI=",
    gh: "https://github.com/Mayanksaharkar/E-commerce-webapp",
    live: "https://mayanksaharkar.github.io/Link_Shortner/",
    description :"MERN | TAILWINDCSS ",
  }, {
    title: "Web Scraping",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/web-data-3d-icon-download-in-png-blend-fbx-gltf-file-formats--design-dashboard-website-cloud-pack-crime-security-icons-10342034.png",
    gh: "https://github.com/Mayanksaharkar/WebScraping",
    live: "https://mayanksaharkar.github.io/Link_Shortner/",
    description :"Python | BeautifulSoup | Requests",
  }
];
function Portfolio() {
  return (
    <PageContainer>
      <div className="px-4  ">
        <h3 className="lg:text-3xl md:text-md sm:text-xl font-extrabold text-neutral py-4">
          my portfolio
        </h3>
        <div className="lg:gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {Projects.map((project) => (
          <div className="w-full h-full my-2 col-span-1" key={project.gh}>
            <Card
              key={project.title}
              title={project.title}
              img={project.img}
              gh={project.gh}
              live={project.live}
              description={project.description}
            />
          </div>

        ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Portfolio;
