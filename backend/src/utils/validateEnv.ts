import { cleanEnv, num, port, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    SALT_ROUNDS: num(),
  });
}

export default validateEnv;
