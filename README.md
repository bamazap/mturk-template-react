# mturk-template-react

This is starter code for creating a React app for use on Amazon Mechanical Turk. Based on [a-newman/mturk-template](https://github.com/a-newman/mturk-template).


## Frontend
**Requirements:** `node`, `npm` or `yarn`

You will need to edit the title and disclaimer in `App.tsx` and most of the text in `Instructions.tsx`. Beyond that, you should be able to confine your changes entirely to the `Task` component.

### Usage
I've been using `yarn` but `npm` should be fine too.
- `yarn start` dev server & open app in browser
- `yarn build` transpile to `build` folder
    - you can put these files on a web server
    - I've been using `deploy-gh-pages.sh` to deploy on GitHub pages.
- `yarn test` to run tests although there are only smoke tests right now.

### Browser Support
All browsers since 2011 (including IE 9) *should* be supported. The code gets compiled to ES2015 and language features not supported by IE 9 are polyfilled. Most CSS is autoprefixed, although you have to prefix Grid styles yourself, and some CSS simply will not work in IE 9.


## Backend
Currently, only serverless HITs are supported. Eventually I may add server-side code, but saving data to AMT is convenient if you don't need a server.


## Amazon Mechanical Turk
**Requirements:** `python3`, `boto3`, `bs4`

Currently, only iframe hits are supported because external link ones require a backend.

### Usage
Do `jupyter notebook` in the `mturk` directory and open `mturk.ipynb`. The notebook contains documentation.


## Caveats
- Before using the mturk notebook, you must set up an authentication key to use the Amazon API and include it in a credentials file. [Instructions](https://aws.amazon.com/developers/getting-started/python/)
- Source maps are disabled (to prevent workers from snooping on the code). If you want them, you need to remove `GENERATE_SOURCEMAP=false` in `.env`.
- I have `"homepage": "."` since I hosted the demo on GitHub Pages. If you host it somewhere else and/or add routing you may need to change this.
