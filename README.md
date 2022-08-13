# chrome-extension-deno-typescript

deno + TypeScript Chrome Extension example

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
