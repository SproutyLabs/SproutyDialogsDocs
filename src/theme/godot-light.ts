import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.vsLight;

export default {
  plain: {
    color: '#2d2d2dff',
    backgroundColor: '#f6f6f6ff',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['comment'],
      style: {
        color: '#4e4e4e80',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#e8c113ff',
      },
    },
        {
      types: ['number'],
      style: {
        color: '#6acfaeff',
      },
    },
    {
      types: ['type', 'minus_type'],
      style: {
        color: '#1bb282ff',
      },
    },
    {
      types: ['annotation'],
      style: {
        color: '#f19142ff',
      },
    },
    {
      types: ['keyword', 'boolean'],
      style: {
        color: '#ee4e66ff',
      },
    },
    {
      types: ['global-function'],
      style: {
        color: '#8686ebff',
      },
    },
    {
      types: ['function-definition'],
      style: {
        color: '#2fbcd8ff',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#2889d9ff',
      },
    },
    {
      types: ['node-reference'],
      style: {
        color: '#44b638ff',
      },
    },
    {
      types: ['operator', 'punctuation'],
      style: {
        color: '#8ab1f9ff',
      },
    },
    {
      types: ['constant'],
      style: {
        color: '#2d2d2dff',
      },
    }
  ],
} satisfies PrismTheme;