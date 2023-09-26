import figlet from "figlet";

const server = Bun.serve({
    port: 9000,
    fetch(req: Request) {
        const body = figlet.textSync("Bun!" + Bun.version);
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
