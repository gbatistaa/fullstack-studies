import * as bcrypt from 'bcrypt';

export abstract class CryptUtils {
  static async generateSalt(): Promise<string> {
    return await bcrypt.genSalt();
  }

  static async generatePasswordHash(plainPassword: string, salt: string) {
    return await bcrypt.hash(plainPassword, salt);
  }

  static async validateHash(plainPassword: string, hashedPassword: string, salt: string): Promise<boolean> {
    const hash: string = await this.generatePasswordHash(plainPassword, salt);
    return hash === hashedPassword;
  }
}
