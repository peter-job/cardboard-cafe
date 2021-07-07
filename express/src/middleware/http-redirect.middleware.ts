import { EnvironmentConfig } from "../config/environment.config"

export const HttpRedirect =(req, res, next) => {
    !EnvironmentConfig.SSL_ENABLED || req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
}