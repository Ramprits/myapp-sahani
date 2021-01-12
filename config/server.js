module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url:
    process.env.NODE_ENV === "production"
      ? "https://myapp-sahani.herokuapp.com"
      : "http://65cf2d9262e8.ngrok.io",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "ffe9d92e64fac5970a495fd6a08604c7"),
    },
  },
});
