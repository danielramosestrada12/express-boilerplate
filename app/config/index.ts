import "dotenv/config";

const config = {
  app: {
    port: process.env.PORT || 8000,
  },
  db: {},
  token: {
    secret: process.env.JWT_SECRET_KEY,
    refreshSecret: process.env.JWT_REFRESH_SECRET_KEY,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucketName: process.env.AWS_BUCKET_NAME,
  },
};

export default config;
