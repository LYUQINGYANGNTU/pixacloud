#!/bin/bash
service nginx restart
service apache2 restart
cd /var/www/html/ && npx webpack-dev-server --entry ./client.js --output bundle.js --debug --devtool inline-source-map --public $WEBSITE_HOSTNAME --host 0.0.0.0 --port 8080
