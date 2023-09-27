import figlet from "figlet";
// import data from "./data/index.yml";

// console.log(data);

const server = Bun.serve({
    port: 9000,
    fetch(req: Request) {
        console.log(Bun.env.API_TOKEN); // why double log
        // prompt('asda')
        const body = figlet.textSync("Bun!" + Bun.version + req.url);
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
