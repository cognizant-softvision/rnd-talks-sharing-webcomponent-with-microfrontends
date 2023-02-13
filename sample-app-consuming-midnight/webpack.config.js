const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
    entry: "./index.js",
    output: {
        filename: "compilado.js"
    },
    mode: "development",
    plugins: [
        new ModuleFederationPlugin({
            name: "host-para-midnight",
            filename: "remoteEntry.js",
            remotes: {
                Midnight: "Midnight@https://rd-latam.cognizantsoftvision.com/midnight/cwc/remoteEntry.js"
            }
        })
    ]
}