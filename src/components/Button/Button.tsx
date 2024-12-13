import {
  Button as _Button,
  ButtonProps,
  NextUIProvider,
} from "@nextui-org/react";

/** Primary UI component for user interaction */
export const Button = (props: ButtonProps) => {
  return (
    <NextUIProvider>
      <_Button {...props} />
    </NextUIProvider>
  );
};
