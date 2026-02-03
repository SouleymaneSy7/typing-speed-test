import { useIsMobile } from "@/hooks/use-mobile";
import Container from "../common/container";
import Title from "../common/title";
import { LogoIcon } from "../icons/icons.component";

export const Logo = () => {
  const isMobile = useIsMobile(400);

  return (
    <Container className="flex items-start gap-125">
      <LogoIcon />

      {!isMobile ? (
        <Container className="flex flex-col gap-1">
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
