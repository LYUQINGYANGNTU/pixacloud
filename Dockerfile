FROM php:8.1-apache
#ENV ACCEPT_EULA=Y
RUN apt-get -y update
RUN apt-get -y install git
RUN apt-get install -y curl git
RUN apt-get update && apt-get install -y gnupg gnupg2 gnupg1
RUN apt-get update
RUN apt-get install -y unixodbc-dev
RUN apt-get install -y libgssapi-krb5-2
#RUN apt-get install -y unixodbc-dev
RUN apt-get install -y apt-transport-https
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list   
RUN apt-get update
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18
RUN ACCEPT_EULA=Y apt-get install -y mssql-tools18
RUN echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bashrc
#RUN source ~/.bashrc
RUN pecl install sqlsrv-5.10.0
RUN pecl install pdo_sqlsrv-5.10.0
RUN docker-php-ext-enable sqlsrv pdo_sqlsrv
RUN printf "; priority=20\nextension=sqlsrv.so\n" > /usr/local/lib/php/extensions/no-debug-non-zts-20210902/sqlsrv.ini
RUN printf "; priority=30\nextension=pdo_sqlsrv.so\n" > /usr/local/lib/php/extensions/no-debug-non-zts-20210902/pdo_sqlsrv.ini
#RUN rm /usr/local/etc/php/php.ini
RUN echo -e 'extension=sqlsrv\nextension=pdo_sqlsrv'>/usr/local/etc/php/php.ini
RUN apt-get -y update
#RUN apt-get install php-common
#RUN docker-php-ext-install
#RUN phpenmod sqlsrv pdo_sqlsrv
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs
#RUN apt-get install -y npm
RUN apt-get -y install nginx
RUN echo "ServerName localhost:80" >> /etc/apache2/apache2.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY default /etc/nginx/sites-enabled/default
COPY . /var/www/html/
EXPOSE 8082
RUN chmod 777 /var/www/html/start.sh
RUN npm install  
RUN npm install webpack-dev-server
ENTRYPOINT ["/var/www/html/start.sh"]
