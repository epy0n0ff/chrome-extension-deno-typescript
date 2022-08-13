import {bundle} from "emit/mod.ts";
import * as esbuild from 'esbuild/mod.js'

const source_url = new URL("./src/main.ts", import.meta.url);

const bundled = await bundle(source_url);
const {code} = await esbuild.transform(bundled['code'], {minify: true});
await Deno.writeTextFile("./dist/bundle.js", code)

esbuild.stop();