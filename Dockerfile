FROM klakegg/hugo:ext-alpine as builder
WORKDIR /site
COPY . /site
RUN hugo

FROM caddy:alpine
COPY --from=builder /site/public /srv/bjl13-org-site/public
COPY Caddyfile /etc/caddy/Caddyfile
