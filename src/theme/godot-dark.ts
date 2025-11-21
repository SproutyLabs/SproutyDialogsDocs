import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.vsDark;

export default {
  plain: {
    color: '#cccccc',
    backgroundColor: '#1c1c1c',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['comment'],
      style: {
        color: '#cccccc80',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#ffeda1',
      },
    },
        {
      types: ['number'],
      style: {
        color: '#a1ffe0',
      },
    },
    {
      types: ['type', 'minus_type'],
      style: {
        color: '#42ffc2',
      },
    },
    {
      types: ['annotation'],
      style: {
        color: '#ffb373',
      },
    },
    {
      types: ['keyword', 'boolean'],
      style: {
        color: '#ff7085',
      },
    },
    {
      types: ['global-function'],
      style: {
        color: '#a3a3f5',
      },
    },
    {
      types: ['function-definition'],
      style: {
        color: '#66e6ff',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#57b3ff',
      },
    },
    {
      types: ['node-reference'],
      style: {
        color: '#63c259',
      },
    },
    {
      types: ['operator', 'punctuation'],
      style: {
        color: '#abc9ff',
      },
    },
    {
      types: ['constant'],
      style: {
        color: '#cccccc',
      },
    }
  ],
} satisfies PrismTheme;