function write(value) {
  console.log(value);
}

public class Native {
  public static void write(String value){
    System.out.print(value);
  }
}

write(std::string value) {
  cout << value << endl;
}
