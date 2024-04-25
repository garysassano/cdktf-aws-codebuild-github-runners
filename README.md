# cdktf-aws-codebuild-github-runners

CDKTF app that deploys a GitHub repository in a personal account, along with a repository webhook that triggers [self-hosted runners in AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/action-runner.html) when workflow jobs are queued.

Alternative example using a GitHub organization webhook: [cdktf-aws-codebuild-github-runners-organization](https://github.com/garysassano/cdktf-aws-codebuild-github-runners-organization)

## Prerequisites

CDKTF app that deploys a GitHub repository in a personal account, along with a repository webhook that triggers [self-hosted runners in AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/action-runner.html) when workflow jobs are queued.

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration) in your local environment.
- **_GitHub:_**
  - Must have set the `GITHUB_TOKEN` variable in your local environment.
- **_Node.js + npm:_**
  - Must be [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your system.

## Installation

```sh
npx projen install
```

## Deployment

```sh
npx projen deploy
```

## Usage

1. Navigate to `https://github.com/<GITHUB_OWNER>/sample-repo/actions/workflows/hello-world.yml`.

2. Click `Run workflow` ➜ `Run workflow`.

3. Your workflow will be enqueued and run on an ephemeral EC2 instance managed by AWS CodeBuild.

## Cleanup

```sh
npx projen destroy
```

## Architecture Diagram

![Architecture Diagram](./src/assets/arch.svg)
