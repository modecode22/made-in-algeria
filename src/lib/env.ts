import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EXAMPLE_URL: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    EXAMPLE_URL: process.env.EXAMPLE_URL
  },
});
