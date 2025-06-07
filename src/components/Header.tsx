import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../constants/social-links";
import images from "../constants/images";

function Header() {
  const asideContentData = [
    "📍 Rua Beija-Flor 58, Colônia",
    "💬 WhatsApp: (11) 95488-4470",
  ];

  const asideSocialMediaLinks = [
    {
      icon: <FaInstagram />,
      name: `Instagram`,
      url: socialLinks.get("instagram"),
      className:
        "flex items-center gap-1 hover:text-pink-200 transition-colors",
    },
    {
      icon: <FaWhatsapp />,
      name: `Whatsapp`,
      url: socialLinks.get("whatsapp"),
      className:
        "flex items-center gap-1 hover:text-green-200 transition-colors",
    },
  ];

  return (
    <header className="w-full">
      <aside className="max-w-full mx-auto px-4 py-2 flex flex-wrap justify-center gap-3 text-center tracking-wider bg-secondary-600 max-mobile:flex-col max-mobile:items-center">
        {asideContentData.map((content, index) => (
          <p
            key={index}
            className="text-white font-semibold text-base sm:text-sm max-mobile:text-xs"
          >
            {content}
          </p>
        ))}

        {asideSocialMediaLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              link.className +
              " text-white font-semibold text-base sm:text-sm max-mobile:text-xs"
            }
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </aside>
      <div className="w-full flex justify-center bg-primary-700 py-6">
        <div className="flex flex-col items-center text-center max-w-screen-xl w-full">
          <img
            src={images.logo}
            alt="Logo"
            className="w-30 h-30 rounded-full border-4 border-secondary-600 shadow-md"
          />
          <p className="text-sm text-white mt-1 italic">
            Comida Caseira Preparada com Sabor e Amor ❤️
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
