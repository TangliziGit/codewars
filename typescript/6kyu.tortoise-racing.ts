export class G964 {
    public static race = (v1, v2, g) => {
      if (v2 - v1 <= 0) return null;
      
      const esp = 1e-6;
      let time = g / (v2 - v1),
          result = [];
      
      for (let ceof of Array(3).fill(60)) {
        result.push(Math.floor(time + esp));
        time = (time - Math.floor(time + esp)) * ceof;
      }
      
      return result;
    }    
}