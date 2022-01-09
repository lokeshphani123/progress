import java.util.ArrayList;
import java.util.List;

public class MyClass {
    public static void main(String args[]) {
        int i = 0;
        int j = 1;

        List<Integer> l = new ArrayList<>();

        l.add(i);
        l.add(j);

        //size or i
        for (int x = i; x <= 10; x++) {

                l.add(l.get(x) + l.get(x+1));
         }
        // 0, 1, 1, 2, 3
        l.forEach(a -> System.out.println(a));

    }
}