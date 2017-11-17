declare function foo(x: number, y: string, z: number): void;
declare function foor(x: number, y: string, z: number, ka?: boolean): void;
declare function foorest(x: number, y: string, ...ns: number[]): void;
declare const triple: [number, string, number];
declare const wrong: [number, string, string];
declare const pair: [string, number];

foo(...triple);
foo(1, ...pair);
foo(1, 'hi', ...triple);
foo(...wrong);

foor(...triple);
foor(1, ...pair);

foorest(...triple);
