//// [substitutionTypesInIndexedAccessTypes.ts]
// Repro from #31086

type UserArgs = {
  select?: boolean
};

declare function withBoundary<T extends UserArgs>(args?: Subset<T, UserArgs>): T;
declare function withoutBoundary<T extends UserArgs>(args?: T): T;

const boundaryResult = withBoundary({
  select: true,
});

const withoutBoundaryResult = withoutBoundary({
  select: true,
});


//// [substitutionTypesInIndexedAccessTypes.js]
"use strict";
// Repro from #31086
var boundaryResult = withBoundary({
    select: true
});
var withoutBoundaryResult = withoutBoundary({
    select: true
});
