# 5. (6kyu) Encrypt this!</summary>

#### [Codewars Link](https://www.codewars.com/kata/5848565e273af816fb000449)

### Acknowledgments:

I thank yvonne-liu for the idea and for the example tests :)

### Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:

- The first letter needs to be converted to its ASCII code.
- The second letter needs to be switched with the last letter

3. Keepin' it simple: There are no special characters in input.

### Examples:

```
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
```
