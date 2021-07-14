import assert from "assert";
import minimist from "minimist";
import path from "path";

const args = minimist(process.argv.slice(2)); // , { boolean: ["v", "verbose", "find-unused-exports", "u"] });
if (args.help) {
    usage(console.log.bind(console));
    process.exit(0);
}
