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
    res.render("favicons", {
        title: "Favicon Explorer"
    });
};