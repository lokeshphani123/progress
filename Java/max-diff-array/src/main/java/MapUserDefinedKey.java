package main.java;

import main.java.dto.Employee;

import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class MapUserDefinedKey {


    public static void main(String[] args) throws IOException {
        InputStream inputStream = null;
        Objec


//        final File initialFile = new File("src/test/resources/sample.txt");
//        final InputStream targetStream =
//                new DataInputStream(new FileInputStream(initialFile));
        Map<Employee, List<Employee>> employeeListMap = new HashMap<>();

        File file = new File("main/resources/sample.json");

        inputStream = new DataInputStream(new FileInputStream(file));
        String data;

        try( BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream))){
            data = reader.lines().collect(Collectors.joining());
        }





    }
}
