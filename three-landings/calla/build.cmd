@echo off
rem Rebuilds calla.bundle.js from calla.js + scene.js (needs Node). Edit the sources, then run this.
cd /d "%~dp0"
npx --yes esbuild calla.js --bundle --format=iife --minify --target=es2019 --alias:three=./vendor/three.module.js --alias:three/addons=./vendor/addons --loader:.png=dataurl --outfile=calla.bundle.js
