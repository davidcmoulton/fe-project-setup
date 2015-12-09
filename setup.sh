#!/usr/bin/env bash

getPatternLab () {
  echo Downloading patternlab...
  curl -sLo patternlab.zip https://github.com/pattern-lab/patternlab-php/archive/v1.0.0.zip

  echo Extracting patternlab...
  mkdir patternlab
  tar -zxvf patternlab.zip -C ./patternlab --strip-components 1
  rm patternlab.zip

  echo Building base patternlab...
  cd patternlab
  mkdir public && cp core/styleguide public/styleguide
  php ./core/builder.php -g
}

getPatternLab
echo Installing dependencies...
npm install

echo Running Grunt
grunt
