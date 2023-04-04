//import ".//src/styles.css";
const pl = require("tau-prolog");
require("tau-prolog/modules/lists")(pl);
const session = pl.create(1000);
const fs = require("fs");
const labirinto = fs.readFileSync("src/prolog-scripts/labirinto.pl", "utf8");

const vueApp = new Vue({
    el: "#vapp",
    data: {
        query: "",
        program: "",
        answers: ""
    },
    created() {
        this.program = ":- use_module(library(lists)). ".concat(labirinto);
        session.consult(this.program);
    },
    methods: {
        runProlog() {
            this.answers = "";
            session.query(this.query);
            session.answers(x => (this.answers += pl.format_answer(x).concat("\n")));
        }
    }
});
