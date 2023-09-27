import figlet from 'figlet';

const server = Bun.serve({
    port: 9000,
    fetch(req: Request) {
        console.log(Bun.env.API_TOKEN); // why double log
        const body = figlet.textSync("Bun!" + Bun.version + req.url);
        import('./data/index.yml').then(data => {
            console.log('🚀 ~ file: index.ts:7 ~ data:', data)
        });
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
