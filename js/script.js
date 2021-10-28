// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
{
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = a.concat(b)
    console.log(c); 

    // or

    const d = [...a, ...b]
    console.log(d);
    
}

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

{
    const a = [1, 2, 3];
    a.reverse();
    console.log(a);
}

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

{
    const a = [1, 2, 3];
    a.push(4, 5, 6)
    console.log(a);
}

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

{
    const a = [1, 2, 3];
    a.unshift(4, 5, 6)
    console.log(a);
}

// 5. Дан массив ['js', 'css', 'jq']. Выведите в консоль первый элемент.

{
    const a = ['js', 'css', 'jq'];
    console.log(a[0]);
}

// 6. Дан массив ['js', 'css', 'jq']. Выведите в консоль последний элемент.

{
    const a = ['js', 'css', 'jq'];
    console.log(a[a.length-1]);
}

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].

{
    const a = [1, 2, 3, 4, 5];
    const b = a.slice(0, 3)
    console.log(b);
}

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

{
    const a = [1, 2, 3, 4, 5];
    const b = a.slice(3, 5)
    console.log(b);
}

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

{
    const a = [1, 2, 3, 4, 5];
    a.splice(1, 2);
    console.log(a);
}

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

{
    const a = [1, 2, 3, 4, 5];
    const b = a.slice(1, 4);
    console.log(b);
}

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

{
    const a = [1, 2, 3, 4, 5];
    a.splice(3, 0, 'a', 'b', 'c')
    console.log(a);
}

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

{
    const a = [1, 2, 3, 4, 5];
    a.splice(1, a.length,'a', 'b', 2, 3, 4, 'c', 5, 'e')
    console.log(a);

}

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

{
    const a = [3, 4, 1, 2, 7];
    a.sort();
    console.log(a);
}

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

{
    
    const a = [5, 6, 7, 8, 9];
    let sumReduce = a.reduce((previous, current) => previous + current);
    console.log(sumReduce);

    // or


    let sumForEach = 0;
    a.forEach(item => sumForEach += item);
    console.log(sumForEach);

    // or

    function sumArr(arr) {
        let sum = 0;
        for(let i of arr) {
            sum += i;
        }
        return sum;
    }
    console.log(sumArr(a));
}

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

{
    const a = [5, 6, 7, 8, 9];
    a.forEach((item, index, arr) => arr[index] = item **2 );
    console.log(a);
}

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
{
    const a = [1,-3, 5, 6,-7, 8, 9,-11];

    function positiveOnly (array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] > 0) {
                array.splice(i, 1);
            }
        }
        return array;
    }
    positiveOnly(a);

    console.log(a);

    // or

    let b = a.filter(item => item < 0);
    console.log(b);
}


// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
{
    const a = [1,-3, 5, 6,-7, 8, 9,-11];

    function evenOnly (array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] % 2 !== 0) {
                array.splice(i, 1);
            }
        }
        return array;
    }
    evenOnly(a);
    console.log(a);
}
// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
{
    const a = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

    function longString (array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length <= 5) {
                array.splice(i, 1);
            }
        }
        return array;
    }
    longString(a);
    console.log(a);

}
// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

{
    const a = [1, 2, [3, 4], 5, [6, 7]];

    function arraysOnly (array) {
        for (let i = array.length -1; i >= 0; i--) {
            if (!Array.isArray(array[i])) {
                array.splice(i, 1);
            }
        }
    return array;
    }
    arraysOnly(a);
    console.log(a);
}


// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
{
    const a = [5,-3, 6,-5, 0,-7, 8, 9];
    
    let amount = a.filter(item => item < 0).length;
    console.log(amount);
}
