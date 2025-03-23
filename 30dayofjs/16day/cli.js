#!/usr/bin/env node
// Shebang to specify the script should be run using Node.js (works on Unix-like systems).

import fs from "fs/promises"; // Import the 'fs' module for file system operations using promises.
const args = process.argv.slice(2); // Get command-line arguments, excluding 'node' and script name.
const command = args[0]; // First argument is the command (e.g., 'read', 'write', 'delete').
const fileName = args[1]; // Second argument is the file name.
const content = args.slice(2).join(" "); // Remaining arguments are treated as content for the 'write' command.

// Check if a command is provided; if not, display an error and usage instructions.
if (!command) {
  console.error("Error: No command provided.");
  printUsage();
  process.exit(1); // Exit the process with an error code.
}

// Check if a file name is provided for commands other than 'help'.
if (!fileName && command !== "help") {
  console.error("Error: No file name provided.");
  printUsage();
  process.exit(1); // Exit the process with an error code.
}

// Handle different commands using a switch statement.
(async () => {
  switch (command) {
    case "read":
      try {
        // Read the content of the specified file.
        const data = await fs.readFile(fileName, "utf8");
        console.log("File Content:\n", data); // Display the file content.
      } catch (err) {
        console.error(`Error reading file "${fileName}":`, err.message); // Handle file read errors.
      }
      break;

    case "write":
      try {
        // Write the provided content to the specified file.
        await fs.writeFile(fileName, content);
        console.log(`File "${fileName}" written successfully.`); // Confirm successful write.
      } catch (err) {
        console.error(`Error writing to file "${fileName}":`, err.message); // Handle file write errors.
      }
      break;

    case "delete":
      try {
        // Check if the file exists before deleting.
        await fs.access(fileName);
        await fs.unlink(fileName); // Delete the file.
        console.log(`File "${fileName}" deleted successfully.`); // Confirm successful deletion.
      } catch {
        console.error(
          `Error: File "${fileName}" does not exist or cannot be deleted.`
        );
      }
      break;

    case "help":
    default:
      // Display usage instructions for 'help' or invalid commands.
      printUsage();
      break;
  }
})();

// Function to display usage instructions.
function printUsage() {
  console.log("Usage: cli.js <command> <filename> [content]");
  console.log("Commands:");
  console.log("  read <filename>         Read and display the file content.");
  console.log("  write <filename> <text> Write the provided text to the file.");
  console.log("  delete <filename>       Delete the specified file.");
  console.log("  help                    Display this help message.");
}
