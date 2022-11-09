How to override webpack.config.js when we use create-react-app.

In package.json, we add the scripts to an existing project:
```
    "start": "node ./scripts/start.js",
    "build": "node ./scripts/build.js"
```

Which run either file.

`/scripts/overrides/webpac-config.js` will add the ModuleFederationPlugin, and override the file cache.