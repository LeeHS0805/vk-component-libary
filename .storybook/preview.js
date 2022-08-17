import '../src/styles/index.scss'
import {addParameters, addDecorator, configure} from '@storybook/react';

import { withInfo } from '@storybook/addon-info'
const wrapperStyle = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn) => (
  <div style={wrapperStyle}>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: { inline: true, header: false}})
configure(require.context('../src',true,/\.stories.tsx$/), module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
