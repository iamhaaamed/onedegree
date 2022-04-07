#!/usr/bin/env bash

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" == "main" ];
then
    react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios'
fi