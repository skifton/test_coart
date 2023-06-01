import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import LayoutWrapper from "../LayoutWrapper";
import CoArtLogo from "../../assets/CoArt_logo.png";
import Button from "../Form/Button";

const Header: React.FC = () => {
  const intl = useIntl();

  return (
    <header className="py-12">
      <LayoutWrapper className="flex items-center justify-between flex-col md:flex-row">
        <div className="flex items-center">
          <img
            className="w-20 h-20 mr-8"
            src={CoArtLogo}
            alt={intl.formatMessage({ id: "LOGO" })}
          />
          <h1 className="text-3xl text-white font-semibold tracking-widest">
            <FormattedMessage id="COART_PLATFORM" />
          </h1>
        </div>

        <Button className="px-3 w-full mt-10 sm:w-max md:mt-0">DATA ROOM</Button>
      </LayoutWrapper>
    </header>
  );
};

export default Header;
