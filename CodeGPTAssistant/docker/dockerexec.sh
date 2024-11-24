#Dockerファイルからイメージの作成
#docker build -t codegptassistant-dev-image .

#イメージからコンテナの作成
docker run --name codegptassistant-dev-container -it -p 3001:3000 codegptassistant-dev-image

#Docker内で作成したフォルダをローカルにコピー
#docker cp codegptassistant-dev-container:code-gpt-assistant .

#Docker内に指定したローカルファイルを持ち込む
docker run --name codegptassistant-dev-container -v $(pwd)/code-gpt-assistant:/code-gpt-assistant --rm -it -p 3001:3000 codegptassistant-dev-image

