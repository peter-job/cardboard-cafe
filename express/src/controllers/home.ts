import { Request, Response } from "express";
import { EnvironmentConfig } from "../config/environment.config";
import path from "path";
import { readdirSync } from "fs";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.render("home", {
        title: "Home"
    });
};

export const favicons = (req: Request, res: Response) => {
    ;
    res.render("favicons", {
        title: "Favicon Explorer",
        data: {
            icons: getFavicons()
        }
    });
};

const getFavicons = () => {
    const favicons = readdirSync(EnvironmentConfig.FAVICONS_PATH)
        .map(file => ({ ext: path.extname(file), name: path.parse(file).name }));
    return favicons;
}