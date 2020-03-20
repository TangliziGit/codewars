object MultiplesOf3Or5 {   
  def solution(n: Int): Long = {
    def acc(x: Int): Long = x*(x+1)/2
    
    var (a, b, c) = ((n-1)/3, (n-1)/5, (n-1)/15)
    return 3*acc(a) + 5*acc(b) - 15*acc(c)
  }
}
