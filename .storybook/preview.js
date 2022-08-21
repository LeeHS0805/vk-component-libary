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
const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/Components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};
configure(loaderFn, module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
