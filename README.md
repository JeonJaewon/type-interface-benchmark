# Type Interface Benchmark

This project benchmarks the performance of TypeScript's type and interface implementations.

## Benchmark Details

- **Number of Tests**: Each benchmark was conducted 10 times on 1000 types/interfaces.
- **TypeScript Version**: 5.8.3

## Benchmark Results

Here is a summary of the benchmark results:

- **Type Compile Stats**

  - Average: 1369.50085ms
  - Max: 1488.58892ms
  - Min: 1241.16438ms

- **Interface Compile Stats**
  - Average: 1312.45505ms
  - Max: 1452.09558ms
  - Min: 1252.57896ms

## How to Run the Benchmark

To run the benchmark, use the following command:

```bash
pnpm run benchmark
```

To install dependencies, run:

```bash
pnpm install
```
