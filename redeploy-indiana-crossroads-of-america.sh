#!/bin/sh

# 1. Fetch the latest code from remote.
git pull origin main

# 2. Install dependencies.
npm install

# 3. Build step that compiles code, bundles assets, etc. into the dist directory.
npm run build
