## API Credentials

http://openweathermap.org/

    user: stormreaever
    email: stormreaever@gmail.com
    password: todayheapartmechanism2

    API key: 6f1054c3f9c834efaa1dc9c635c780e3

## Domain Setup

https://delanomaloney.com/2013/07/10/how-to-set-up-virtual-hosts-using-xampp/

### Hosts file

C:/Windows/System32/drivers/etc/httpd-vhosts.conf

add to the file

    127.0.0.1         weatherapp.dev
    127.0.0.1         www.weatherapp.dev

### Virtualhost

D:/xampp/apache/conf/extra/hosts

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
