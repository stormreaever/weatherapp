# App

This is a simple web app that displays the current weather in Toronto. 

Built with the openweathermap API.

Go to http://openweathermap.org/ to get an API key.

## Domain Setup

https://delanomaloney.com/2013/07/10/how-to-set-up-virtual-hosts-using-xampp/

### Hosts file

C:/Windows/System32/drivers/etc/hosts

add to the file

    127.0.0.1         weatherapp.dev
    127.0.0.1         www.weatherapp.dev

### Virtualhost

D:/xampp/apache/conf/extra/httpd-vhosts.conf

add to the bottom of the file

    NameVirtualHost *:80
    <VirtualHost *:80>
      DocumentRoot "C:/xampp/htdocs"
      ServerName localhost
    </VirtualHost>

    <VirtualHost *:80>
      DocumentRoot "d:/xampp/htdocs/weatherapp/docroot"
      ServerName weatherapp.dev
      ServerAlias www.weatherapp.dev
      <Directory "d:/xampp/htdocs/weatherapp/docroot">
        AllowOverride All
        Require all Granted
      </Directory>
    </VirtualHost>


**

## Time

2016-06-11

    13:45-14:00
    14:30-15:30
    17:00-17:45
    18:00-19:15
    19:30-
