import MulishRegularWoff from './Mulish/Mulish-Regular.woff'
import MulishRegularWoff2 from './Mulish/Mulish-Regular.woff2'

export const fontFaces = `
  @font-face {
        font-family: 'Mulish';
        src: local('MulishRegular'), local('MulishRegular'),
        url(${MulishRegularWoff2}) format('woff2'),
        url(${MulishRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`
