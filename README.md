# My Awesome Monorepo

---

This repo is built for the purpose of studyingthe `monorepo pattern`.


So I started from an LTS version of node that allowed to have a version of npm higher than or equal to `7`. This is because I need to manage the `workspaces` with the npm cli. You will then find the node version 16.13.0 declared (the LTS declared on 2021-11-14).

Packages therefore have the following structure:

```bash
packages
  |-- host
  |-- library
  |-- remote
```

The package names are purposely explicit:

- `host` it was built as a federated module using the command `npx create-mf-app`, it's a React app, Typescript based with Tailwindcss as framework for css. 

- `library` it was built as a library for sure, same command `npx create-mf-app`. That's for develop stand alone and linked to `remote` package. 
This has the following advantages: the possibility of being developed with maximum speed keeping the types, and deployed independently as a package on github (obviously on the repo itself).

- `remote` it was built as a federated module using the command `npx create-mf-app`, it's a React app, Typescript based with Tailwindcss as framework for css. 

The application is deployed on Vercel as two distinct projects (`host` and `remote`).

I didn't use yarn because npm allows you to deploy single packages in the repo with the utmost simplicity (something that yarn doesn't seem to allow).
