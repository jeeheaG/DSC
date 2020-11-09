//Stack ������ �޼ҵ带 ���� �ȴٴµ�? //case ��+break �� ���� ���� �غ���
package Algorithm;
import java.io.*;
import java.util.ArrayList;
public class No_10828 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		ArrayList<Integer> stack = new ArrayList<Integer>();
		int len = 0;
		int cases = Integer.parseInt(br.readLine());
		
		for(int i=0; i<cases; i++) {
			String order[] = br.readLine().split(" ");
			
			//push ���
			if(order.length == 2 && order[0].equals("push")) {
				stack.add(Integer.parseInt(order[1]));
				len = stack.size();
				//System.out.println(stack);
			}
			
			//pop
			if(order[0].equals("pop")) {
				if(stack.size() != 0) {
					System.out.println(stack.get(len-1));
					stack.remove(len-1);
					len -= 1;
				}
				else if (stack.size() == 0) {
					System.out.println("-1");
				}
			}
			
			//size
			if(order[0].equals("size")) {
				System.out.println(len);
				
			}
			
			//empty
			if(order[0].equals("empty")) {
				if(len == 0) {
					System.out.println(1);
				}
				else if(len != 0) {
					System.out.println(0);
				}
			}
			
			//top
			if(order[0].equals("top")) {
				if(len != 0) {
					System.out.println(stack.get(len-1));
				}
				else if (len == 0) {
					System.out.println(-1);
				}
			}
		}
		
	}

}
