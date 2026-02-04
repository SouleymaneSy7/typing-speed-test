import { useIsMobile } from "@/hooks/use-mobile";
import Container from "../common/container";
import Title from "../common/title";
import { LogoIcon } from "../icons/icons.component";

export const Logo = () => {
  const isMobile = useIsMobile(550);

  return (
    <Container className="gap-space-125 flex max-w-66.75 items-center">
      <LogoIcon />

      {!isMobile ? (
        <Container className="gap-space-50 flex flex-col">
          <Title level="h2" className="text-preset-logo-lg">
            Typing Speed Test
          </Title>

          <p className="text-preset-logo-sm">
            Type as fast as you can in 60 seconds
          </p>
        </Container>
      ) : null}
    </Container>
  );
};
