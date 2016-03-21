import java.io.*;
import java.util.*;
import java.lang.*;

public class TimeConversion {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String date = input.nextLine();
        String[] dateParts = date.split(":");
        String h = dateParts[0];
        String m = dateParts[1];
        String si = dateParts[2];
        String s = si.substring(0, 2);
        String ind = si.substring(2, 4);
        String strHr24;

        if ( ind.equals("PM") ) {
            int hr24 = 12 + Integer.parseInt(h);
            strHr24 = new Integer(hr24).toString();
        } else {
            strHr24 = h;
        }

        String d24 = strHr24 + ':' + m + ':' + s;
        System.out.println(d24);
    }
}
