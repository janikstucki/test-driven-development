import { isValid } from "./isbn13";

test("gültige ISBN-13", () => {
  expect(isValid("9783161484100")).toBe(true); 
});


test("ungültige ISBN-13 mit falscher Prüfziffer", () => {
  expect(isValid("9791234567891")).toBe(false); 
});


test("ungültige ISBN-13 mit nicht-numerischen Zeichen", () => {
  expect(isValid("978-316-148-4100")).toBe(false); 
});
