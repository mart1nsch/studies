class compareStrings {

  static compare(string1, string2) {
    return compareStrings.compareIndexToIndex(string1, string2);
  }

  static compareIndexToIndex(string1, string2) {
    if (!compareStrings.validateType(string1) || !compareStrings.validateType(string2)) {
      return "Invalid type";
    }

    let stringWithDiferences = ``;
    const lengthLoop = string1.length > string2.length ? string1.length : string2.length;

    for (let i = 0; i < lengthLoop; i++) {
      if (string1[i] !== string2[i]) {
        stringWithDiferences += `[${string2[i]}]`;
      } else {
        stringWithDiferences += `${string1[i]}`;
      }
    }

    return stringWithDiferences;
  }

  static validateType(value) {
    return typeof value === "string";
  }
}

class compareStringsTest {
  static test() {
    const arrayTests = [
      ["ABC", "ATC", "A[T]C"],
      ["HELLO", "HEXXO", "HE[X][X]O"],
      ["JAVA", "JARA", "JA[R]A"],
      ["WORLD", "WORRD", "WOR[R]D"],
      ["STRING", "STYING", "ST[Y]ING"],
      ["TEST", "TEAST", "TE[A][S][T]"],
      ["MATCH", "MATTC", "MAT[T][C]"],
      ["PLANE", "PLANE", "PLANE"],
      ["DIFFERENCE", "DIFFARENCE", "DIFF[A]RENCE"],
      ["HOUSE", "MOUSE", "[M]OUSE"],
      [1, 1, 1],
    ];

    arrayTests.forEach(test => {
      const result = compareStrings.compare(test[0], test[1]);

      if(test[2] === result) {
        console.log(`Test passed`);
      } else {
        console.log(`Test failed: ${result}`);
      }
    });
  }
}

compareStringsTest.test();