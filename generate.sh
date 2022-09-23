#!/bin/sh

protoc \
    --plugin=node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=arduino-cli/rpc \
    --ts_proto_opt=outputServices=nice-grpc \
    --ts_proto_opt=outputServices=generic-definitions \
    --ts_proto_opt=oneof=unions \
    --ts_proto_opt=useExactTypes=false \
    --ts_proto_opt=paths=source_relative \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=importSuffix=.js \
    --ts_proto_out=src-gen $(find arduino-cli/rpc -name "*.proto")
