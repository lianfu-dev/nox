interface IConfig {
  MuiPaper: any;
}

const PaperConfig: IConfig = {
  MuiPaper: {
    root: {
      width: '100%',
    },
    elevation1: {
      boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.05)',
    },
  },
};

export default PaperConfig;
