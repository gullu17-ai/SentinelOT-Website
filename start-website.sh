#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
if [ ! -f node_modules/next/dist/bin/next ]; then
  echo 'Install dependencies with pnpm install or npm install first.'
  exit 1
fi
exec node node_modules/next/dist/bin/next dev --hostname 127.0.0.1
