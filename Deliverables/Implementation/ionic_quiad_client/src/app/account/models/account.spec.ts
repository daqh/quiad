import { Account } from "./account";

describe('Account', () => {
    let account: Account;

    beforeEach(() => {
        account = new Account({
            id: 1,
            username: "quiad",
            user: {
                id: 1,
                node: {
                    id: 1
                }
            }
        });
    });

    it("Should be created", () => {
        expect(account).toBeDefined();
    });

});