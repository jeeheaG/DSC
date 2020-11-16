package Algorithm;
import java.io.*;
import java.util.ArrayList;

public class No_10866 {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		ArrayList deque = new ArrayList();
		int cases = Integer.parseInt(br.readLine());
		
		for(int i=0; i<cases; i++) {
			String s[] = br.readLine().split(" ");
			if(s.length == 1) {
				switch(s[0]) {
					case "pop_front": 
						if(deque.size()!=0) {
							System.out.println(deque.get(0));
							deque.remove(0);
						}
						else {System.out.println(-1);}
						break;
					case "pop_back": 
						if(deque.size()!=0) {
							System.out.println(deque.get(deque.size()-1));
							deque.remove(deque.size()-1);
						}
						else {System.out.println(-1);}
						break;
					case "size": 
						System.out.println(deque.size());
						break;
					case "empty": 
						if(deque.size()==0) {
							System.out.println(1);
						}
						else {System.out.println(0);}
						break;
					case "front": 
						if(deque.size()!=0) {
							System.out.println(deque.get(0));
						}
						else {System.out.println(-1);}
						break;
					case "back": 
						if(deque.size()!=0) {
							System.out.println(deque.get(deque.size()-1));
						}
						else {System.out.println(-1);}
						break;
				}
			}
			//push µÎ°¡Áö
			else if(s.length == 2 && s[0].contentEquals("push_front")) {
				deque.add(0,s[1]);
			}
			else if(s.length == 2 && s[0].contentEquals("push_back")) {
				deque.add(deque.size(),s[1]);
			}
		}
		
		

	}

}
