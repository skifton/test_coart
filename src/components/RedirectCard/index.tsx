import React from "react";

interface IProps {
  href: string;
  image?: string;
  title?: string;
  subtitle?: string;
}

const RedirectCard: React.FC<IProps> = ({ href, image, title, subtitle }) => {
  return (
    <a
      className="flex w-full px-5 py-3 space-x-6 bg-white rounded-xl shadow-md shadow-white transform hover:scale-105 transition duration-300 ease-in-out"
      href={href}
      target="_blank"
    >
      <div className="flex w-1/2 justify-center items-center">
        <img className="w-full" src={image} alt={`${title}`} />
      </div>
      <div className="flex w-1/2 justify-start items-center">
        <div className="space-y-3">
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default RedirectCard;
