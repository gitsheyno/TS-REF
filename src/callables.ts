interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;

const subtract: TwoNumberCalc = (x, y) => x - y;

//* void

function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, "  "));
}

const x = printFormattedJSON(["hello", "world"]);

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
// invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(4));

//* constructables

interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor(1697923072611);

//* function overloads

type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
): void;
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
): void;

function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName("iframe")[0];

handleMainEvent(myFrame, (val) => {});
