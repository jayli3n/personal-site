# Personal Site

Live at: <https://jayli3n.me/>

Designed and developed from scratch using just `React` and `Styled Components`. It's highly responsive thanks to `flexbox` and media queries using 6 breakpoints.

This was built as my practice project in 2019 and is **very** out-of-date; it uses Javascript and React class components 🤮.

## Prerequisites

Before you begin, ensure you have Docker Desktop installed and running on your machine.

* [Install Docker](https://docs.docker.com/)

## Development

```bash
# Install deps locally (for gh-pages deployment)
# So I don't need to setup git inside the container)
npm ci

# To run locally
npm run docker:dev

# Deploy
npm run docker:build
npm run deploy
```

See [this](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d) deployment article for more information.
