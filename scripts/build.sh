#!/bin/sh

set -x -e
TALK=${1/.md/}

rm -rf dist/$TALK
slidev build --out dist/$TALK $TALK
