#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

../../node_modules/.bin/composer-rest-server -p hlfv1 -n airline-network -i admin -s adminpw -N required

