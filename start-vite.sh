#!/bin/bash
# chmod +x start-vite.sh

# Initialize rbenv
eval "$(rbenv init -)"
ruby -v

bin/vite dev
