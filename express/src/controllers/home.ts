import { Request, Response } from "express";

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
    const favicons_dir = './src/public/img/favicons';
    const path = require('path');
    const fs = require('fs');
    const favicons = fs.readdirSync(favicons_dir).map(file => ({ ext: path.extname(file), name: path.parse(file).name }));
    favicons.forEach(file => {
        console.log(file);
    });
    return favicons;
}