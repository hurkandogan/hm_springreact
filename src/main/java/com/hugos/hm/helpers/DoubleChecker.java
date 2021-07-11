package com.hugos.hm.helpers;

public class DoubleChecker {
    public Double checkDoubleNumber(Double doubleNumber){
        String s = Double.toString(doubleNumber);
        s = s.replaceAll(",", ".");
        return Double.parseDouble(s);
    }
}
