docker-compose up -d && docker-compose exec web /bin/sh -c "cd /app/ && npm install; \
cd /app/ serverless plugin install --name serverless-plugin-typescript; \ 
cd /app/ serverless plugin install --name serverless-offline; \
cd /app/ serverless plugin install --name serverless-domain-manager; \
exit;"
