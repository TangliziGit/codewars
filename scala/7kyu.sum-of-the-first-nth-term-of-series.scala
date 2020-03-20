object Sol {
  def seriesSum(n: Int): String = 
    (0 until n).map(x => 1.0/(3*x+1)).sum.formatted("%.2f")
}