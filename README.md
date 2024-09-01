# Secure Next.js Playground

This is a playground for testing and learning about secure actions in Next.js. It is built with Next.js, Next Safe Action.

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

## Features examples

- [Edge CSRF Protection](./app/(examples)/csrf/page.tsx)
- [Stateful Next Safe Actions](./app/(examples)/task-stateful/page.tsx)
- [Stateless Next Safe Actions](./app/(examples)/task-stateless/page.tsx)

### Packages

- [`next-safe-action`](https://github.com/next-safe-action/next-safe-action)
- [`@edge-csrf/nextjs`](https://github.com/kubetail-org/edge-csrf)

## License

MIT @ [Rai Siqueira](https://github.com/raisiqueira)