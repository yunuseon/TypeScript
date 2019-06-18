// @strict: true

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
