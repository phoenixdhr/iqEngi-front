
const config = {
    overwrite: true,
    schema: "http://localhost:3000/graphql",
    documents: "src/graphql-astro/**/*.graphql",
    generates: {
        "src/graphql-astro/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            config: {
                withHooks: true
            }
        }
    }
};

module.exports = config;
