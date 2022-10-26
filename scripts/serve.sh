#!/bin/sh

set -x -e
TALK=${1/.md/}

node scripts/server.js $TALK 4200
