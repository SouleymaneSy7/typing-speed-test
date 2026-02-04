import { useIsMobile } from "@/hooks/use-mobile";
import Container from "../common/container";
import { PersonalBestIcon } from "../icons/icons.component";
import { Logo } from "../shared/logo";

const Header = () => {
  const bestScore = 93;

  const isMobile = useIsMobile(550);

  return (
    <Container
      as={"header"}
      className="mt-space-200 mb-space-400 md:mb-space-500 lg:mb-space-800 md:mt-space-400 gap-space-200 container flex items-center justify-between"
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
