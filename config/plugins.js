module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SEND_GRID_KEY"),
    },
    settings: {
      defaultFrom: "rampritsahani.sg@gmail.com",
      defaultReplyTo: "rampritsahani.sg@gmail.com",
    },
  },
});
