module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "themes/bjl13/static/css/",
      files: [
        {
          destination: "brand.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "themes/bjl13/assets/scss/",
      files: [
        {
          destination: "_brand.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
