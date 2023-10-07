import figlet from 'figlet';

const server = Bun.serve({
    port: 9000,
    fetch(req: Request) {
        console.log(Bun.env.API_TOKEN); // why double log
        const data = require('./data/index.yml');
        const body = figlet.textSync("Bun!" + Bun.version + data.name);
        console.log('🚀 ~ file: index.ts:7 ~ data:', data);
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
