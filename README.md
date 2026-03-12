# Halk

A minimal CLI for electron.

## Installation
```bash
npm install @ibnmaher/halk
```

For CLI usage:

```bash
npm install -g @ibnmaher/halk
```

## Usage

```typescript
import { halk, Commands } from '@ibnmaher/halk'
halk(Commands.New, 'my-app')
```

## CLI

```bash
halk new my-app
# All operations had been completed successfully
```

## Development

### Testing

This project uses vitest. Run tests with:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Building

```bash
npm run build
```
