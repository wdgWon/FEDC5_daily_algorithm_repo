const getPermutation = (arr, n) => {
   if (n === 1) return arr.map((el) => [el]);
   const result = [];

   arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const perms = getPermutation(rest, n - 1);
      const attached = perms.map((perm) => [fixed, ...perm]);
      result.push(...attached);
   });

   return result;
};

function solution(수식) {
   let max = -Infinity;
   const 연산자 = 수식.split(/\d+/).filter((e) => e);
   const 연산자중복제거 = [...new Set(연산자)];

   const arr = 수식.match(/\d+|[-+*]/g);

   const priority = getPermutation(연산자중복제거, 연산자중복제거.length);

   const calculator = (left, oper, right) => {
      switch (oper) {
         case "-":
            return left - right;
         case "+":
            return left + right;
         case "*":
            return left * right;
      }
   };

   priority.forEach((order) => {
      const tmpArr = [...arr];

      for (let i = 0; i < order.length; ) {
         const operator = order[i];

         if (tmpArr.includes(operator)) {
            const idx = tmpArr.indexOf(operator);
            tmpArr.splice(
               idx - 1,
               3,
               calculator(+tmpArr[idx - 1], operator, +tmpArr[idx + 1])
            );
         } else i++;
      }

      max = Math.max(Math.abs(tmpArr[0]), max);
   });

   return max;
}





