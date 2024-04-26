import type {Preview} from "@storybook/react";
import {styleDecorator} from "../../src/shared/config/storybook/styleDecorator/styleDecorator";
import {routeDecorator} from "../../src/shared/config/storybook/routeDecorator/routeDecorator";
import {themeDecorator} from "../../src/shared/config/storybook/themeDecorator/themeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
import {storeDecorator} from "shared/config/storybook/storeDecorator/storeDecorator";

const preview: Preview = {
  decorators:[
      storeDecorator,
      styleDecorator,
      routeDecorator,
      themeDecorator(Theme.LIGHT)
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;