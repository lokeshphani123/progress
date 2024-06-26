package org.example;

import io.gatling.javaapi.core.OpenInjectionStep;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.core.OpenInjectionStep.atOnceUsers;


public class Configurations {

    // Basic Test
    static OpenInjectionStep[] basicTest() {
        return new OpenInjectionStep[]{
                rampUsers(4).during(5),
        };
    }


    // Load Test: Tests the system's behavior under expected load conditions.
    static OpenInjectionStep[] loadTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                atOnceUsers(10),
                rampUsers(50).during(10),
                constantUsersPerSec(100).during(60),
                constantUsersPerSec(100).during(60).randomized(),
                rampUsersPerSec(50).to(100).during(20),
                rampUsersPerSec(50).to(100).during(20).randomized(),
                stressPeakUsers(500).during(30)
        };
    }

    // Stress Test: Tests the system's behavior under extreme load conditions.
    static OpenInjectionStep[] stressTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                atOnceUsers(20),
                rampUsers(100).during(10),
                constantUsersPerSec(200).during(30),
                constantUsersPerSec(200).during(30).randomized(),
                rampUsersPerSec(100).to(200).during(15),
                rampUsersPerSec(100).to(200).during(15).randomized(),
                stressPeakUsers(1000).during(20)
        };
    }

    // Spike Test: Tests the system's behavior when there is a sudden spike in the number of users.
    static OpenInjectionStep[] spikeTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                atOnceUsers(100),
                nothingFor(5),
                atOnceUsers(200),
                nothingFor(10),
                atOnceUsers(300),
                constantUsersPerSec(500).during(5)
        };
    }

    // Soak Test: Evaluates the system's performance over an extended period under a specific load.
    static OpenInjectionStep[] soakTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                atOnceUsers(10),
                rampUsers(20).during(10),
                constantUsersPerSec(50).during(3600),
                constantUsersPerSec(50).during(3600).randomized(),
                rampUsersPerSec(20).to(50).during(30),
                rampUsersPerSec(20).to(50).during(30).randomized(),
                constantUsersPerSec(100).during(7200)
        };
    }

    // Endurance Test: Evaluates the system's behavior over a very long period.
    static OpenInjectionStep[] enduranceTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                atOnceUsers(10),
                rampUsers(20).during(5),
                constantUsersPerSec(50).during(14400), // 4 hours
                constantUsersPerSec(50).during(14400).randomized(),
                rampUsersPerSec(10).to(20).during(15),
                rampUsersPerSec(10).to(20).during(15).randomized(),
                constantUsersPerSec(30).during(28800)  // 8 hours
        };
    }

    // Scalability Test: Evaluates the system's ability to scale up or down.
    static OpenInjectionStep[] scalabilityTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                rampUsersPerSec(10).to(50).during(10),
                constantUsersPerSec(50).during(20),
                rampUsersPerSec(50).to(100).during(10),
                constantUsersPerSec(100).during(20),
                rampUsersPerSec(100).to(200).during(10),
                constantUsersPerSec(200).during(20)
        };
    }

    // Volume Test: Tests the system's behavior under different volumes of data.
    static OpenInjectionStep[] volumeTest() {
        return new OpenInjectionStep[]{
                nothingFor(4),
                atOnceUsers(10),
                rampUsers(50).during(10),
                constantUsersPerSec(100).during(30),
                constantUsersPerSec(100).during(30).randomized(),
                rampUsersPerSec(50).to(100).during(20),
                rampUsersPerSec(50).to(100).during(20).randomized(),
                stressPeakUsers(500).during(30)
        };
    }
}

