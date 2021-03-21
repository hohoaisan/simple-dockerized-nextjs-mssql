# https://towardsdatascience.com/build-a-mssql-docker-container-800166ecca21

FROM mcr.microsoft.com/mssql/server:2017-latest

RUN mkdir -p /db

WORKDIR /db

COPY . /db

RUN chmod +x /db/database.sh

EXPOSE 1433

CMD /bin/bash ./entrypoint.sh