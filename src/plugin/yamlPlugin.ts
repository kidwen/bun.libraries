import { PluginBuilder, plugin } from "bun";
import { SafeAny } from "model";

plugin({
    name: "YAML",
    async setup(build: PluginBuilder) {
        const { load } = await import('js-yaml');
        const { readFileSync } = await import('fs');
        build.onLoad({ filter: /\.(yaml|yml)$/ }, (args) => {
            const text = readFileSync(args.path, 'utf-8');
            const exports = load(text) as Record<string, SafeAny>;
            return {
                exports,
                loader: 'object'
            }
        });
    }
});
