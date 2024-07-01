export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Affiliate", "Careers & Culture", "Blog", "Press"],
    },
    {
      title: "My Account",
      links: [
        "Press inquiries",
        "Social Media",
        "Directories",
        "Images & B-roll",
        "Permissions",
      ],
    },
    {
      title: "Our Information",
      links: [
        "Return Policies",
        "Privacy Policy",
        "Terms & Conditions",
        "Site Map",
        "Store Hours",
      ],
    },
    {
      title: "About Us",
      links: [
        "Support Center",
        "Customer Support",
        "About Us",
        "Copyright",
        "Popular Campaign",
      ],
    },
  ];

  return (
    <div className="pt-12 pb-6 bg-gray-200">
      <div className="w-[80%] grid mx-auto border-b-[1.5px] pb-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index} className="md:mx-auto mx-0">
            <h1 className="text-[1rem] text-gray-900 font-semibold mb-6">
              {section.title}
            </h1>
            {section.links.map((link, idx) => (
              <p
                key={idx}
                className="text-black opacity-80 mb-4 text-[1rem] cursor-pointer hover:text-yellow-700"
              >
                {link}
              </p>
            ))}
          </div>
        ))}
        <div className="opacity-80">
          Copyright &copy;{new Date().getFullYear()} All right reserved! Asmit
          Khanal
        </div>
      </div>
    </div>
  );
}
