import bcrypt from "bcrypt";

export async function saltAndHashPassword(password) {
  if (!password) {
    throw new Error("Password is required");
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
}
