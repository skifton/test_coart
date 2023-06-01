import React from "react";

interface IProps {
  href: string;
  children: React.ReactNode;
}

const SocialMediaButton: React.FC<IProps> = ({ href, children}) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

export default SocialMediaButton;
