package main.java;

import java.util.Arrays;

public class MaxDiffArray {

    public static void main(String[] args) {
        int array[] = {-5, -8, -4,-1, 5, 9, 10, 11, 19, 25, 31, 22};
        Arrays.sort(array);

        int max = 0;
        for(int i=0; i<array.length-1;i++){

            int diff = array[i+1]-array[i];
            max = Math.max(diff,max);

        }

        System.out.println(max);
    }
}
