module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SEND_GRID_KEY"),
    },
    settings: {
      defaultFrom: "gve70475@zwoho.com",
      defaultReplyTo: "gve70475@zwoho.com",
    },
  },
});
