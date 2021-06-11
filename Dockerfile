FROM denoland/deno:alpine-1.10.3

WORKDIR /code
ADD . /code

RUN deno --version
RUN deno install --unstable -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts

EXPOSE 8000
CMD ["aleph", "start" ,"-p", "8000"]
