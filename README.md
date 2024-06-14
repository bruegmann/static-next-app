# Static Next.js with Localization

Simple example of using Next.js as SSG with support for multiple languages. There are also scripts to prepare to run on a PHP server.

Important in the [next.config.mjs](next.config.mjs) are:

-   `output: "export"`, to generate static assets
-   `trailingSlash: true`, to generate a folder with `index.html` for each route (`[lang]/about` ➡️ `out/en/about/index.html`, etc.)

## Support for BasePath

You can define `basePath: "/projects/static-next-app/out"` in [next.config.mjs](next.config.mjs), for example.

This is necessary if the site is hosted in a subdirectory in production (e.g., "https://example.com/mysite/"). If it is hosted at the root ("https://example.com/"), these settings can be removed.

## Preparation for PHP

In [custom-scripts/prepare-php.mjs](custom-scripts/prepare-php.mjs), there is code that generates an [index.php](public/index.php) and [.htaccess](public/.htaccess). The script is executed with `npm run build` before `next build`.
The generated files ensure that on servers with PHP, users are automatically redirected to **/en** or **/de**, for example. Subpaths are also redirected, so **/about** will redirect to **/en/about**. The available languages are taken from [lib/translations.ts](lib/translations.ts).
The script also utilizes the `basePath` from [next.config.mjs](next.config.mjs).

## Running PHP locally

1. Generate the _out_ folder with `npm run build`.
2. Execute this:

```
php -S localhost:8000 -t out
```
