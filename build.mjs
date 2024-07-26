// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.rgb(181, 98, 43)("'Itai Mizlish'"),
  handle: chalk.rgb(181, 98, 43)("'itaim'"),
  work: chalk.green("Software Developer") + chalk.rgb(139, 0, 139)(" @Wizzzy"),

  whatsapp: chalk.gray("https://wa.me/") + chalk.red("+972542258899"),
  email: chalk.gray("https://mailto:") + chalk.yellow("itaimizlish@gmail.com"),
  github: chalk.gray("https://github.com/") + chalk.green("itaim18"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("itai-mizlish/"),
  web: chalk.cyan("https://itaimiz.com/"),
  npx: `${chalk.red("npx")} ${chalk.white("wizzzy")}`,
  labelWork: chalk.white.bold("    Work:"),
  labelEmail: chalk.white.bold("   email:"),
  labeLWhatsapp: chalk.white.bold("Whatsapp:"),
  labelnpm: chalk.white.bold("     npm:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${chalk.blue("   return")} ${chalk.white("isMate")} ? ${data.handle} : ${data.name} `;
const working = `${data.labelWork}  ${data.work}`;
const emailing = `${data.labelEmail}  ${data.email}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;
const whatsapping = `${data.labeLWhatsapp}  ${data.whatsapp}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelTwitter + data.twitter
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline + // data.labelnpm + data.npm
  whatsapping +
  newline + // data.labelWork + data.work
  emailing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

writeFileSync(
  join(import.meta.dirname, "bin/output"),
  chalk.green(boxen(output, options)),
);
