import fs from "fs";
import path from "path";
import url from "url";
import chalk from "chalk";
import boxen from "boxen";

// https://github.com/chalk/chalk#chalklevel
chalk.level = 3;

const israel = chalk.blue("Is") + chalk.white("ra") + chalk.blue("el");

const employer = chalk.green.italic("frelancer");

const basics = {
  name: "Itai Mizlish",
  handle: "ItaiM",
  location: `Made in ${israel}. Living in Israel.`,
  work: `Software Developer at ${employer}`,
};

const links = {
  github: `https://github.com/${chalk.green("ItaiM")}`,
  linkedin: `https://www.linkedin.com/in/${chalk.blue("itai-mizlish/")}`,
  website: "https://itaimiz.com",
};

const text = `
${chalk.white(basics.name)} / ${chalk.white(basics.handle)}
${chalk.gray.italic(basics.location)}

     ${chalk.white.bold("Work:")} ${chalk.white(basics.work)}
   ${chalk.white.bold("GitHub:")} ${chalk.gray(links.github)}
 ${chalk.white.bold("LinkedIn:")} ${chalk.gray(links.linkedin)}
  ${chalk.white.bold("Website:")} ${chalk.magenta(links.website)}

     ${chalk.white.bold("Card:")} npx ItaiM
`;

const boxenOptions = {
  margin: 1,
  padding: 1,
  borderStyle: "single",
};

const data = chalk.green(boxen(text.trim(), boxenOptions));

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const file = path.join(__dirname, "bin", "card");

const writeFileOptions = {
  encoding: "utf8",
  flag: "w",
};

fs.writeFileSync(file, data, writeFileOptions);
