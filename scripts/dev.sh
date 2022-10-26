#!/bin/sh

set -x -e
TALK=${1/.md/}

slidev -p 4200 $TALK
