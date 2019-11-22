#!/usr/bin/env node

if (process.env.NETLIFY_BUILD == "true") {
  console.log("building on netlify");
  require("fs").writeFileSync(
    require("path").resolve(__dirname, ".npmrc"),
    "\n@adaptabletools:registry=https://registry.adaptabletools.com\n//registry.adaptabletools.com/:_authToken=${NPM_TOKEN}"
  );
} else {
  console.log("Local instal...");
}
