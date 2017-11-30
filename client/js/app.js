$(document).ready(() => {
    $.get("/api/journal")
        .done(function(data) {
            console.log(data);

            let container = $("#main");

            for(let journal of data) {
                //header
                let header = $("<h2/>");
                header.text(`[${journal.title}]`);

                container.append(header);

                //content
                let table = $("<table />");

                let yesterday = $("<tr />");
                yesterday.append($("<td />").text("Category"));
                yesterday.append($("<td />").text(journal.category));

                table.append(yesterday);
/*

                let today = $("<tr />");
                today.append($("<td />").text("Today"));
                today.append($("<td />").text(journal.date));

                table.append(today);
*/

                let impediment = $("<tr />");
                impediment.append($("<td />").text("Body"));
                impediment.append($("<td />").text(journal.body));

                table.append(impediment);

                container.append(table);
            }

        });

    $("#new-entry").submit((e) => {
        e.preventDefault();
        $(this).prop("disable", true);

        let data = $("#new-entry").serialize();

        $.post("/api/meeting", data)
            .done((data) => {
                $(this).prop("disable", false);
            });
    });
});

