#!/bin/bash
# chmod +x start-ruby.sh

# Initialize rbenv
eval "$(rbenv init -)"
ruby -v

# serve
bin/rails server
