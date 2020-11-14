package Algorithm;
import java.io.*;

public class No_10808 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s = br.readLine();
		String al[] = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
		int count[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String c = new String();
		for(int i=0; i<s.length(); i++) {
			for(int j=0; j<26; j++) {
				if(s.charAt(i)==(char)al[j].charAt(0)) {
					count[j] += 1;
				}
			}
			
		}
		for(int i=0; i<26; i++) {
			c += Integer.toString(count[i])+' ';
		}
		System.out.println(c);
		
		
	}

}
