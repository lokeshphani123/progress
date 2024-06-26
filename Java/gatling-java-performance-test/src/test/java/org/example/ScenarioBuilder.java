package org.example;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class ScenarioBuilder {

    public static io.gatling.javaapi.core.ScenarioBuilder getScenario() {
        return scenario("BasicSimulation")
                .exec(
                        http("covid_data_all_state")
                                .get("/v1/states/current.json")
                                .check(status().is(200))
                                .check(jsonPath("$[*].state").findAll().saveAs("states"))
                )
                .pause(2)
                .exec(
                        foreach("${states}", "state").on(
                                http("covid_data_by_state")
                                        .get("/v1/states/${state}/info.json")
                                        .check(status().is(200))
                        )

                );
    }
}
