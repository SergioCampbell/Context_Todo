import { config } from "dotenv";

config();

//Database
export const DATABASE_URI = process.env.DATABASE_URI || 4000;

//PORT
export const PORT = process.env.PORT || 4000;