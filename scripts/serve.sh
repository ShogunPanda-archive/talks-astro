#!/bin/sh

TALKS=$(ls -1 dist)
FZF_TALKS_LIST=($TALKS)
FZF_COLORS=prompt:3:bold,bg+:-1,fg+:2:bold,pointer:2:bold,hl:-1:underline,hl+:2:bold:underline
FZF_HEIGHT=$(((${#FZF_TALKS_LIST[@]})+1))
TALK=$(echo "$TALKS" | fzf -1 -e --prompt "Which talk you want to view? " --info=hidden --preview-window=hidden --layout=reverse --height $FZF_HEIGHT --color $FZF_COLORS --query "$1")

if [ $? = 0 ]; then
  set -x -e
  node scripts/server.js $TALK $2
fi
