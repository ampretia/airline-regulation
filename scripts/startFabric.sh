#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

${DIR}/fabric-dev-servers/downloadFabric.sh && ${DIR}/fabric-dev-servers/startFabric.sh && ${DIR}/fabric-dev-servers/createComposerProfile.sh
