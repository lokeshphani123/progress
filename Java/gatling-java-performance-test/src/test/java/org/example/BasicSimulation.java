package org.example;

import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.http.HttpDsl.http;

public class BasicSimulation extends Simulation {

    private HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://api.covidtracking.com") // Base URL
            .acceptHeader("application/json");

    private static io.gatling.javaapi.core.ScenarioBuilder scenario() {
        return ScenarioBuilder.getScenario();
    }

    {
        setUp(
                scenario().injectOpen(Configurations.basicTest())
        ).protocols(httpProtocol);
    }
}
