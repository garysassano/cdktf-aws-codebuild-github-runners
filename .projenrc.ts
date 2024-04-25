import { javascript } from "projen";
import { IndentStyle } from "projen/lib/javascript/biome/biome-config";
import { CdktfTypeScriptApp } from "projen-cdktf-app-ts";

const project = new CdktfTypeScriptApp({
  name: "cdktf-aws-codebuild-gha-runners",

  // Base
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  gitignore: ["*.tfstate*"],
  projenrcTs: true,

  // Toolchain
  biome: true,
  biomeOptions: {
    biomeConfig: {
      assist: {
        enabled: true,
        actions: {
          source: {
            organizeImports: "on",
          },
        },
      },
      formatter: {
        enabled: true,
        indentStyle: IndentStyle.SPACE,
        indentWidth: 2,
        lineWidth: 100,
      },
      linter: {
        enabled: true,
        rules: {
          recommended: true,
          suspicious: {
            noShadowRestrictedNames: "off",
          },
        },
      },
    },
  },
  cdktfVersion: "0.21.0",
  minNodeVersion: "22.17.1",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "10",

  // Deps
  devDeps: ["projen-cdktf-app-ts", "zod", "yaml"],
  terraformProviders: ["hashicorp/aws@~> 6.4.0", "integrations/github@~> 6.6.0"],
});

// Generate CDKTF constructs after installing deps
project.tasks.tryFind("install")?.spawn(project.cdktfTasks.get);

project.synth();
