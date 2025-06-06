import bcrypt from 'bcryptjs';

export class Password {
    static async hash(password: string): Promise<string> {

        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    static async verify(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}

