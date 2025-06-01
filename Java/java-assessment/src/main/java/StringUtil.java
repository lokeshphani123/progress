import java.util.*;
import java.util.stream.Collectors;

public class ServerStatus {

    public Set<String> getServerStatus() {
        Map<String, Integer> serverStatus = new HashMap<>();
        serverStatus.put("Server 1", 5);
        serverStatus.put("Server 2", 4);
        serverStatus.put("Server 3", 5);
        serverStatus.put("Server 4", 6);
        serverStatus.put("Server 5", 2);
        serverStatus.put("Server 6", 4);
        serverStatus.put("Server 7", 5);

                // Group servers by value
        return serverStatus.entrySet().stream().collect(Collectors.groupingBy(Map.Entry::getValue, Collectors.mapping(Map.Entry::getKey, Collectors.toSet())))
                .entrySet().stream()
                // Filter repeated servers
                .filter(entry -> entry.getValue().size() >1)
                // Get all the repeated servers
                .flatMap(entry -> entry.getValue().stream())
                .collect(Collectors.toSet());
    }
}
