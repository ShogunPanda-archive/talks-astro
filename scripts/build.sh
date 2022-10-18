#!/bin/sh

set -x -e

rm -rf dist/$1
slidev build --out dist/$1 $1.md
