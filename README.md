# chrome-extension-deno-typescript

deno + TypeScript Chrome Extension example

## requirements
- deno 1.24.2

## build

```
deno task build
```

## test

```
deno test -A ./tests
```

## how to run

1. Build
2. Load dist directory as chrome extension
3. Open https://httpbin.org/cookies/set/hoge/hige
4. Click "get cookie" button
