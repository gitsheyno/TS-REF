//* an open interface
export interface DataTypeRegistery {
  //* empty by design
}

//* arg as typed query
export function fetchRecord(
  arg: keyof DataTypeRegistery & string,
  id: string
) {}
