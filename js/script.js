    var data = {
      "Рыбы": {
        "Форель": {},
        "Щука": {}
      },

      "Деревья": {
        "Хвойные": {
          "Лиственница": {},
          "Ель": {}
        },
        "Цветковые": {
          "Берёза": {},
          "Тополь": {}
        }

      }
    };

    function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) { // отдельная рекурсивная функция
      var li = '';
      for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
      }
      if (li) {
        var ul = '<ul>' + li + '</ul>'
      }
      return ul || '';
    }

    var container = document.getElementById('container');
    
