import { serve } from "inngest/next";

import { inngest } from "../../../inngest/client";
import { generateDeck } from "@/inngest/functions/generate-deck";

// Inngest calls this route to run background functions.
// Run `pnpm inngest:dev` alongside `pnpm dev` for local development.
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateDeck],
});
