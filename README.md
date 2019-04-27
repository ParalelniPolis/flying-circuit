# Flying Circuit

Website of Hackatoshi's Flying Circuit

## Development

```bash
git clone git@github.com:ParalelniPolis/flying-circuit.git
cd flying-circuit
npm install # or yarn
npm run dev
```

## Deploy

First, build the static site:

```bash
npm run export
git subtree push --prefix out origin gh-pages
```

Second, deploy to gh-pages:

```bash
npm run deploy
```

or manually using this command:

```bash
git subtree push --prefix out origin gh-pages
```

TODO (michal): fix loading pages from wrong subdir `flyingcircuit.com/out`


