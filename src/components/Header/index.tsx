import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import LayoutWrapper from "../LayoutWrapper";
import CoArtLogo from "../../assets/CoArt_logo.png";

const Header: React.FC = () => {
  const intl = useIntl();

  return (
    <header className="py-12">
      <LayoutWrapper className="flex items-center">
        <img
          className="w-20 h-20 mr-8"
          src={CoArtLogo}
          alt={intl.formatMessage({ id: "LOGO" })}
        />
        <h1 className="text-3xl text-white font-semibold tracking-widest">
          <FormattedMessage id="COART_PLATFORM" />
        </h1>
      </LayoutWrapper>
    </header>
  );
};

export default Header;
