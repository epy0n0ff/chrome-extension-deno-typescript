import {Aes, assertEquals, Cbc, Padding} from "../test_deps.ts";

Deno.test("aes", () => {
    const te = new TextEncoder();

    const input = "HogeHoge;"
    const key = te.encode("12345678901234567890123456789012");
    const data = te.encode(input);
    const iv = new Uint8Array(16);

    const cipher = new Cbc(Aes, key, iv, Padding.PKCS7);
    const decipher = new Cbc(Aes, key, iv, Padding.PKCS7);

    const encrypted = cipher.encrypt(data);
    const decrypted = decipher.decrypt(encrypted);
    assertEquals(new TextDecoder().decode(decrypted), input);
});