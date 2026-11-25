import { mkdirSync, writeFileSync } from "node:fs";

// Single-line entry: one sentence, punchline lands on the last words.
const LINE =
  "We held a forty-five-minute meeting about an email, and it ended with a new meeting to discuss the meeting about the email.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
