window.addEventListener('DOMContentLoaded', function () {
    var shops = document.getElementsByClassName('shop__location');
    for (i = 0; i < shops.length; i++) {
        shops[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = e.target.id;
            var targetObj = addressData[target];
            myMap.geoObjects.removeAll();
            for (i = 0; i < targetObj.length; i++) {
                var mark = new ymaps.Placemark(addressData[target][i].coordinates, addressData[target][i].properties,
                    addressData[target][i].options);
                myMap.geoObjects.add(mark);
            }
        })
    };

    /* var allshops = document.getElementById('allshops');
    allshops.addEventListener('click', function (e) {
        e.preventDefault();
        placeMarks();
    }); */

    ymaps.ready(init);
    // Инициализация карты
    function init() {
        myMap = new ymaps.Map('map', {
            center: [53.902496, 27.561481],
            zoom: [11],
            controls: ['zoomControl'],
            scroll: false
        });
        myMap.behaviors.disable('scrollZoom');
        placeMarks();
    }

    function placeMarks() {
        for (key in addressData) {
            for (i = 0; i < addressData[key].length; i++) {
                var mark = new ymaps.Placemark(addressData[key][i].coordinates, addressData[key][i].properties,
                    addressData[key][i].options);
                myMap.geoObjects.add(mark);
            }
        }
    }

    var addressData = {
        "xistore": [{
                "coordinates": [53.890224, 27.554375],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "ул. Бобруйская, д. 6, ст. м. «Площадь Ленина» (1 этаж, возле главного входа) (ТРЦ \"Galileo\")"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.859605, 27.674022],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "Партизанский пр-т, д. 150А, ст. м. «Могилевская» (2 этаж, остров)"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.908649, 27.432321],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "ул. Притыцкого, д. 156, ст. м. «Каменная горка» (напротив 33–34 кассы гипермаркета)"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.858474, 27.476761],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "пр-т Дзержинского, д. 106, ст. м. «Петровщина»"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.840127, 27.568775],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "микрорайон Лошица, улица Иосифа Гошкевича, 3"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.924861, 27.598482],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "ул. Сурганова, д. 20, ст. м. «Академия наук»"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            }
        ],
        "xiaomi-store": [{
            "coordinates": [53.916249, 27.579519],
            "properties": {
                "hintContent": "Xiaomi-Store",
                "balloonContent": "Минск, ул. Веры Хоружей 1А, ТЦ \"Силуэт\", цокольный (подземный) этаж, 1 ряд 12 место (сектор В)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }],
        "nsv": [{
            "coordinates": [53.886441217491, 27.42795443254],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск ул. Лобанка, 94"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.876796070691, 27.4666185],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. Горецкого, 2"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.94738857061, 27.678082],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. Городецкая, 30"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.895543519885, 27.5473275],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск пл. Независимости 3-2 пав. № 209 (2-й уровень)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.875023070687, 27.594871],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск пр. Рокоссовского, 2 (2-й этаж)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.875023070687, 27.594871],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск пр. Рокоссовского, 2 (2-й этаж)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.874721354898, 27.630266872986],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск ул. Жилуновича/пр. Партизанский"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.875130914218, 27.62892735965],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск пр-т Партизанский 81Б-3"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.874960070687, 27.4982125],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск ул. Уманская, 54"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.859605070705, 27.6740215],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, пр. Партизанский, 150а"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.890224070668, 27.554375],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. Бобруйская, 6"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.926244570614, 27.5174725],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск пр. Победителей, 65"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.93638057064, 27.6731865],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск Корона пр. Независимости, 154"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.927851070648, 27.432752],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. Налибокская, 36"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.96418131761, 27.624800153503],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "Минский район, пересечение Логойского тракта и МКАД, ТРЦ \"Экспобел\""
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.96418131761, 27.624800153503],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "Минский район, пересечение Логойского тракта и МКАД, ТРЦ \"Экспобел\""
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908649070657, 27.432321],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "Г. Минск, ул. Притыцкого, 156"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908554070656, 27.548599],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, пр. Победителей, д.9"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.842417070719, 27.5292135],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. Корженевского, д. 26"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.91749057065, 27.429671],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. Казимировская, д. 6"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908518327721, 27.470143813492],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "г. Минск, ул. П.Глебки, 5"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.839811092602, 27.568614495737],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "Минск, ул.Гошкевича, 3"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.871587581446, 27.572815593254],
            "properties": {
                "hintContent": "На Связи",
                "balloonContent": "Минск, Денисовская, 8, Е-Сити"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }],
        "new-store": [{
                "coordinates": [53.926245, 27.517472],
                "properties": {
                    "hintContent": "New Store",
                    "balloonContent": "Минск, пр. Победителей, 65, ТРЦ \"Замок\""
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.933608, 27.652157],
                "properties": {
                    "hintContent": "New Store",
                    "balloonContent": "Минск, ул. Мстиславца, 11, ТРЦ \"Dana Mall\""
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            }
        ],
        "21vek": [{
                "coordinates": [53.875071, 27.498212],
                "properties": {
                    "hintContent": "21 Век (точка самовывоза)",
                    "balloonContent": "Минск, ул. Уманская 54, ТЦ «Глобо», 2-й этаж"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.951760, 27.681487],
                "properties": {
                    "hintContent": "21 Век (точка самовывоза)",
                    "balloonContent": "Минск, ул. Ложинская 22, ТЦ «Дмитриев Кирмаш», 2-й этаж"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.878782, 27.591574],
                "properties": {
                    "hintContent": "21 Век (точка самовывоза)",
                    "balloonContent": "Минск, ул. Тростенецкая, 17"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            }
        ],
        "patio": [{
            "coordinates": [53.842417, 27.529213],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Корженевского, 26 (ТЦ \"Корона\")"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.925539, 27.516376],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Победителей 65/1 (ТЦ \"Замок\")"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.93638, 27.673186],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Независимости, 154 (ТЦ \"Корона\")"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908018, 27.527318],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Кальварийская, 24 (ТЦ «Корона»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.925317725288, 27.449469566345],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Голубка, 2 (ТЦ «Бонус»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.876340565935, 27.465176582336],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Горецкого, 2 (ТЦ «Гиппо»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.965705284332, 27.644562721252],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, д. Боровая, 7а (ТЦ «Боро»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.921324836435, 27.581251859665],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Кульман, 14"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.871609220565, 27.568779587746],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Маяковского, 146"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.883626296859, 27.681577205658],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Нестерова, 49 (Гипермаркет «Евроопт»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908522273119, 27.548582553864],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Победителей, 9 (ТРЦ «Галерея Минск»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.93355501058, 27.651987075806],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Мстиславца, 11 (ТЦ «Dana Mall»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908649, 27.432321],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Притыцкого, 156 (ТЦ «GreenCity»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.861844037121, 27.480097040534],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Дзержинского, 104 (ТЦ «Титан»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }]
    }
})