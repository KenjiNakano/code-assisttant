FROM ubuntu:22.04

RUN set -x && \ 
    apt update && \ 
    apt install -y emacs && \
    apt install -y nodejs npm && \ 
    npm install n -g && \ 
    apt install -y curl && \ 
    n stable && \
    apt purge -y nodejs npm

RUN set -x && \ 
    npm install -g yarn && \
    yarn add create-next-app && \
    yarn add clsx && \
    yarn add openai && \
    yarn add @mui/material @emotion/react @emotion/styled && \
    yarn add aws-sdk

ENV HOST 0.0.0.0
EXPOSE 3000

