#!/usr/bin/env sh
# aborta com erros 
set -e
# build 
npm run build
# navegue até o diretório de saída da compilação 
cd dist
# se você estiver implantando em um domínio personalizado 
# echo 'www.example.com' > CNAME
git init 
git add -A 
git commit -m 'deploy'
# se você estiver implantando em https://<USERNAME>.github.io 
 #git push -f git@github.com:MikaelMoraes/MikaelMoraes.github.io.git main
# se você estiver implantando em https://<USERNAME>.github.io/<REPO> 
 git push -f git@github.com:MikaelMoraes/Portifolio.git main:gh-pages
cd -