#! /bin/bash

set -euo pipefail

# Change to the directory of this file
cd "$(dirname "$0")"

# GraphQL generated folder paths relative to this file
QUERIES_GENERATED_FOLDER=./src/graphql/queries/generated
MUTATIONS_GENERATED_FOLDER=./src/graphql/mutations/generated
FRAGMENTS_GENERATED_FOLDER=./src/graphql/fragments/generated
SCHEMA_GENERATED_FOLDER=./src/graphql/schema/generated

# Wipe existing generated folders.
# Necessary as graphql-codegen does not do this properly even with the overwrite flag
rm -rf $QUERIES_GENERATED_FOLDER
rm -rf $MUTATIONS_GENERATED_FOLDER
rm -rf $FRAGMENTS_GENERATED_FOLDER
rm -rf $SCHEMA_GENERATED_FOLDER

# Generate files
graphql-codegen --config codegen.yml

# Fix operation imports
# Required due to https://github.com/dotansimha/graphql-code-generator/issues/2913
for i in `find $QUERIES_GENERATED_FOLDER -type f -name "*.generated.tsx"`; do
  sed -i.bak -e "s|import \* as Operations from './|import * as Operations from \'../|g" $i;
  rm $i.bak;
done

for i in `find $MUTATIONS_GENERATED_FOLDER -type f -name "*.generated.tsx"`; do
  sed -i.bak -e "s|import \* as Operations from './|import * as Operations from \'../|g" $i;
  rm $i.bak;
done