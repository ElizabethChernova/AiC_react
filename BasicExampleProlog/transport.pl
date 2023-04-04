% Define the items
animal(chicken).
animal(fox).
item(grain).

% Define the safe combinations
safe(chicken, grain).
safe(fox, chicken).
safe(X, Y) :- safe(Y, X).

% Define the rules for transporting the items
transport1(X, Y) :- animal(X), animal(Y), X \= Y, safe(X, Y).
transport1(X, Y) :- item(X), animal(Y), safe(Y, _), X \= Y.
transport1(X, Y) :- animal(X), item(Y), safe(_, X), X \= Y.