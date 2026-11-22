const text = await Deno.readTextFile("lesen.ts");
console.log(text.length, "Zeichen gelesen");
