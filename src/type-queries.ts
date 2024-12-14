//* TYPE QUERIES

//* Type queries allow us to obtain type information from values,
//* which is an incredibly important capability — particularly when working with libraries that may not,
//* expose type information in a way that’s most useful for you

//* keyof
type DatePropertyNames = keyof Date;

//* Hint, Property keys in javasxcript are string, number, symbol

type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;

//* typeof

async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Titanium White"),
  ]);

  type ApiResponseType = typeof apiResponse;

  //   type ApiResponseType = [Response, string];
}

const MyAjaxConstructor = CSSRule;

//* static side of Class

const newRules = CSSRule;
CSSRule.CHARSET_RULE;
const foo = new newRules();

type MyRules = typeof newRules;

//* Index Acces Types

interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car["color"];

// let carColor: Car["not-something-on-car"];
let carColorRedComponent: Car["color"]["red"];
let carProperty: Car["color" | "year"];
