import {
  pink,
  blue,
  purple,
  grey,
} from '@material-ui/core/colors';

interface IConfig {
  MuiButton: any;
  MuiIconButton: any;
  MuiFab: any;
}

const ButtonConfig: IConfig = {
  MuiButton: {
    root: {
      minWidth: '120px',
      borderRadius: 0,
      fontSize: '14px',
      color: grey[50],
    },
    label: {
      textTransform: 'none', // capitalize
    },

    // main primary
    containedPrimary: {
      color: grey[50],
      backgroundColor: pink.A400,

      '&:hover': {
        backgroundColor: pink.A200,
      },
    },
    // secondary primary
    containedSecondary: {
      color: grey[50],
      backgroundColor: blue.A400,

      '&:hover': {
        backgroundColor: blue.A200,
      },
    },
    // default primary
    contained: {
      color: grey[50],
      backgroundColor: purple.A400,

      '&:hover': {
        backgroundColor: purple.A200,
      },
    },

    // main outlined
    outlinedPrimary: {
      color: pink.A400,
      border: `1px solid ${pink.A400}`,

      '&:hover': {
        backgroundColor: pink[100],
        boxShadow:
          `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      },
    },
    // secondary outlined
    outlinedSecondary: {
      color: blue.A400,
      border: `1px solid ${blue.A400}`,

      '&:hover': {
        backgroundColor: blue[100],
        boxShadow:
          `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      },
    },
    // default outlined
    outlined: {
      color: purple.A400,
      border: `1px solid ${purple.A400}`,
      boxShadow:
        `0px 3px 1px -2px rgba(0,0,0,0.2),
        0px 2px 2px 0px rgba(0,0,0,0.14),
        0px 1px 5px 0px rgba(0,0,0,0.12)`,

      '&:hover': {
        backgroundColor: purple[100],
        boxShadow:
          `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      },
    },

    // text primary
    textPrimary: {
      color: pink.A400,
      backgroundColor: pink[100],

      '&:hover': {
        backgroundColor: pink[200],
        boxShadow:
          `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      },
    },
    // text secondary
    textSecondary: {
      color: blue.A400,
      backgroundColor: blue[100],

      '&:hover': {
        backgroundColor: blue[200],
        boxShadow:
          `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      },
    },
    // text default
    text: {
      color: purple.A400,
      backgroundColor: purple[100],
      boxShadow:
        `0px 3px 1px -2px rgba(0,0,0,0.2),
        0px 2px 2px 0px rgba(0,0,0,0.14),
        0px 1px 5px 0px rgba(0,0,0,0.12)`,

      '&:hover': {
        backgroundColor: purple[200],
        boxShadow:
          `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      },
    },
  },

  MuiIconButton: {
    root: {
      color: pink.A400,
    },
  },

  MuiFab: {
    primary: {
      backgroundColor: pink.A400,

      '&:hover': {
        backgroundColor: pink.A200,
      },
    },
  },
};

export default ButtonConfig;
