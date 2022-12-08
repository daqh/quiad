import { NextFunction, Request, Response } from "express";
import { AccountController } from "../controllers/account.controller";
import bcrypt from "bcrypt";

export class RegistrationService {

    private accountController = new AccountController();

    public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
        const _ = req.body.account;
        _.password = bcrypt.hashSync(_.password, 10);       // Generazione dell'hash della password e sostituzione alla vecchia password
        try {
            const account = await this.accountController.createAccount(_);
            res.json(account);
        } catch(err) {
            console.log(err);
            res.json(err);
        }
    }

}
