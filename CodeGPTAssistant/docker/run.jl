current_dir = @__DIR__
cmd = `docker run --name codegptassistant-dev-container -v $(current_dir)/../code-gpt-assistant:/code-gpt-assistant --rm -it -p 3001:3000 codegptassistant-dev-image`
run(cmd)
