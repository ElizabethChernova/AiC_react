var session = pl.create();
session.consult("                   \
    % load lists module                          \
    :- use_module(library(lists)).               \
                                                 \
    % fruit/1                                    \
    fruit(apple). fruit(pear). fruit(banana).    \
                                                 \
    % fruits_in/2                                \
    fruits_in(Xs, X) :- member(X, Xs), fruit(X). \
", {
    success: function () {
        /* Program parsed correctly */
    },
    error: function (err) {
        /* Error parsing program */
    },
});
session.query("fruits_in([carrot, apple, banana, broccoli], X).", {
    success: function (goal) {
        /* Goal parsed correctly */
    },
    error: function (err) {
        /* Error parsing goal */
    },
});
session.answer({
    success: function (answer) {
        console.log(answer); // {X/apple}
        session.answer({
            success: function (answer) {
                console.log(answer); // {X/banana}
            },
            // error, fail, limit
        });
    },
    error: function (err) {
        /* Uncaught error */
    },
    fail: function () {
        /* No more answers */
    },
    limit: function () {
        /* Limit exceeded */
    },
});
