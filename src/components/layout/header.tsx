import Container from "../common/container";

import { Logo } from "../shared/logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { PersonalBestIcon } from "../icons/icons.component";

const Header = () => {
  const bestScore = 93;
  const isMobile = useIsMobile(550);

  return (
    <Container
      as={"header"}
      className="pt-space-200 pb-space-400 md:pb-space-500 lg:pb-space-800 md:pt-space-400 gap-space-200 container flex items-center justify-between"
    >
      <a href="#">
        <Logo />
      </a>

      <div className="gap-space-125 flex items-center">
        <PersonalBestIcon />

        <p
          className={
            isMobile
              ? "text-preset-4 text-neutral-400 capitalize"
              : "text-preset-4 text-neutral-400 normal-case"
          }
        >
          {!isMobile ? "Personal" : null} best:{" "}
          <span className="text-neutral-0 uppercase">{bestScore} WPM</span>
        </p>
      </div>
    </Container>
  );
};

export default Header;
