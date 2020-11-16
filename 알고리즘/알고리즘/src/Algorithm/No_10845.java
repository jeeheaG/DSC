package Algorithm;
import java.io.*;
import java.util.ArrayList;

public class No_10845 {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		ArrayList que = new ArrayList();
		int cases = Integer.parseInt(br.readLine());
		
		for(int i=0; i<cases; i++) {
			String s[] = br.readLine().split(" ");
			if(s.length == 1) {
				switch(s[0]) {
					case "pop": 
						if(que.size()!=0) {
							System.out.println(que.get(0));
							que.remove(0);
							
						}
						else {System.out.println(-1);}
						break;
					case "size": 
						System.out.println(que.size());
						break;
					case "empty": 
						if(que.size()==0) {
							System.out.println(1);
						}
						else {System.out.println(0);}
						break;
					case "front": 
						if(que.size()!=0) {
							System.out.println(que.get(0));
						}
						else {System.out.println(-1);}
						break;
					case "back": 
						if(que.size()!=0) {
							System.out.println(que.get(que.size()-1));
						}
						else {System.out.println(-1);}
						break;
				}
			}
			//push
			else if(s.length == 2 && s[0].contentEquals("push")) {
				que.add(s[1]);
			}
		}
		
		

	}

}
