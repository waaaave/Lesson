import { NextFunction, Request, Response } from "express";
export declare const validateUserData: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const hashPassword: (request: Request, response: Response, next: NextFunction) => Promise<void>;
