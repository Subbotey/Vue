// Обе задачи реализованы тут
// В процессе выполнения возникла одна загвоздка связанная с анимацией
// Поэтому класс uk-animation-scale-up закомментирован
// На уроке задам вопрос о причине возникновения этой загвоздки.
let app = new Vue({
    el: '#app',
    template: `<div class="uk-width-3-4 uk-align-center" uk-grid>
     <ul uk-tab>
         <li class="uk-active" @click="show1"><a href="#">Twin Power</a></li>
         <li @click="show2"><a href="#">Soare CI4+</a></li>
         <li @click="show3"><a href="#">Stradic CI4</a></li>
     </ul>
     <div  v-if="showTab1" class="uk-padding-remove-left uk-text-center uk-child-width-expand@m uk-grid-match" uk-grid>
         <div class="uk-width-1-3@m">
             <div class="uk-card uk-card-default uk-card-body <!--uk-animation-scale-up-->">
                 <h3 class="uk-heading-divider uk-card-title">{{product.title}}</h3>
                 <p><img :src="product.url"></p>
             </div>
         </div>
         <div>
             <div class="uk-card uk-card-default uk-card-body uk-text-left <!--uk-animation-scale-up-->">
                 <h3 class="uk-card-title uk-heading-divider">Характеристики</h3>
                 <div><span class="uk-text-bold">Описание:</span> {{product.description}}</div>
                 <p v-if="visible0">{{product.description2}}</p>
                 <div><a @click="visible0 = !visible0">{{visible0?'Скрыть описание':'Подробнее'}}</a></div>
                 <p><span class="uk-text-bold">Артикул:</span> {{product.art}}</p>
                 <p><span class="uk-text-bold">Производитель:</span> <a :href="product.link">{{product.manufacturer}}</a></p>
                 <p><span class="uk-text-bold">Вес:</span> {{product.weight | weightGr}}</p>
                 <p><span class="uk-text-bold">Класс катушки:</span> {{product.class}}</p>
                 <p><span class="uk-text-bold">Количество подшипников:</span> {{product.bearing}}</p>
                 <p><span class="uk-text-bold">Цена:</span> {{product.price | formatPrice}}</p>
             </div>
         </div>
     </div>
     <div  v-if="showTab2" class="uk-padding-remove-left uk-text-center uk-child-width-expand@m uk-grid-match" uk-grid>
         <div class="uk-width-1-3@m">
             <div class="uk-card uk-card-default uk-card-body <!--uk-animation-scale-up-->">
                 <h3 class="uk-heading-divider uk-card-title">{{product2.title}}</h3>
                 <p><img :src="product2.url"></p>
             </div>
         </div>
         <div>
             <div class="uk-card uk-card-default uk-card-body uk-text-left <!--uk-animation-scale-up-->">
                 <h3 class="uk-card-title uk-heading-divider">Характеристики</h3>
                 <div><span class="uk-text-bold">Описание:</span> {{product2.description}}</div>
                 <p v-if="visible1">{{product2.description2}}</p>
                 <div><a @click="visible1 = !visible1">{{visible1?'Скрыть описание':'Подробнее'}}</a></div>
                 <p><span class="uk-text-bold">Артикул:</span> {{product2.art}}</p>
                 <p><span class="uk-text-bold">Производитель:</span> <a :href="product2.link">{{product2.manufacturer}}</a></p>
                 <p><span class="uk-text-bold">Вес:</span> {{product2.weight | weightGr}}</p>
                 <p><span class="uk-text-bold">Класс катушки:</span> {{product2.class}}</p>
                 <p><span class="uk-text-bold">Количество подшипников:</span> {{product2.bearing}}</p>
                 <p><span class="uk-text-bold">Цена:</span> {{product2.price | formatPrice}}</p>
             </div>
         </div>
     </div>
     <div  v-if="showTab3" class="uk-padding-remove-left uk-text-center uk-child-width-expand@m uk-grid-match" uk-grid>
         <div class="uk-width-1-3@m">
             <div class="uk-card uk-card-default uk-card-body <!--uk-animation-scale-up-->">
                 <h3 class="uk-heading-divider uk-card-title">{{product3.title}}</h3>
                 <p><img :src="product3.url"></p>
             </div>
         </div>
         <div>
             <div class="uk-card uk-card-default uk-card-body uk-text-left <!--uk-animation-scale-up-->">
                 <h3 class="uk-card-title uk-heading-divider">Характеристики</h3>
                 <div><span class="uk-text-bold">Описание:</span> {{product3.description}}</div>
                 <p v-if="visible2">{{product3.description2}}</p>
                 <div><a @click="visible2 = !visible2">{{visible2?'Скрыть описание':'Подробнее'}}</a></div>
                 <p><span class="uk-text-bold">Артикул:</span> {{product3.art}}</p>
                 <p><span class="uk-text-bold">Производитель:</span> <a :href="product3.link">{{product3.manufacturer}}</a></p>
                 <p><span class="uk-text-bold">Вес:</span> {{product3.weight | weightGr}}</p>
                 <p><span class="uk-text-bold">Класс катушки:</span> {{product3.class}}</p>
                 <p><span class="uk-text-bold">Количество подшипников:</span> {{product3.bearing}}</p>
                 <p><span class="uk-text-bold">Цена:</span> {{product3.price | formatPrice}}</p>
             </div>
         </div>
     </div>

    </div>`,
    data: {
        product: {
            link: 'https://www.shimano.com/en/',
            url: 'https://images.spinningline.ru/00178621_LARGE-001.jpg',
            title: 'Катушка Shimano Twin Power C2000S',
            description: 'Twin Power – это очень обширная линейка безынерционок бренда Shimano, в которую входят модификации с разными техническими характеристиками. Здесь представлена модель, предназначенная для оснащения ультралайтового удилища.',
            description2: 'Вес C2000S составляет всего 193 гр. Фрикционный тормоз расположен в передней части корпуса и рассчитан на нагрузку до 3 кг. Передаточное отношение равняется 5,0:1. Для создания корпуса эксперты Shimano применили особый материал, наделенный высокой прочностью – CI4+. Система Coreprotect позволяет использовать эту катушку в морской ловле, защищая от разрушительного воздействия морской воды. Холоднокованый привод Hagane Gear обеспечивает бесперебойную стабильную работу катушек Twin Power. Каждая деталь этих моделей продумана экспертами Shimano для идеальной работы.',
            art: 'TPC2000S',
            manufacturer: 'Shimano',
            weight: 193,
            class: 'ultralight',
            bearing: '9+1',
            price: '32 060',
        },
        product2: {
            link: 'https://www.shimano.com/en/',
            url: 'https://images.spinningline.ru/00180838_LARGE-001.jpg',
            title: 'Катушка Shimano Soare CI4+ C2000SSPG',
            description: 'Разработчики японского концерна Shimano в 2017 году обновили серию безынерционных катушек Soare CI4+. Эти катушки давно в ходу у любителей ультралайта и микроджига. Особой популярностью безынерционки пользуются у поклонников ловли форели на водоемах-платниках.',
            description2: 'Также эта серия серия может использоваться для рокфишинга - лучше всего для этой цели подойдет модель индексом C2000SSPG. Для изготовления компактного корпуса G-Free Body использован материал CI4+. Именно за счет этого катушки такие легкие и надежные. У старших моделей для снижения веса установлен облегченный ротор Magnum Light Rotor. В их механизме установлена комбинация деталей X-Ship, а также антикоррозийная защита CoreProtect. У всех моделей реализована система антиреверса. Ротор может двигаться только в режиме намотки. Фрикцион расположен спереди. Тормозные диски защищены от попадания влаги специальной прокладкой. Фирменная шпуля со скошенным бортиком повышает дальность заброса за счет снижения трения. Рукоять катушки, которая также изготовлена из материала CI4+, можно переставить под другую руки.',
            art: 'CI4+C20SSPG',
            manufacturer: 'Shimano',
            weight: 162,
            class: 'ultralight',
            bearing: '9+1',
            price: '25 900',
        },
        product3: {
            link: 'https://www.shimano.com/en/',
            url: 'https://images.spinningline.ru/00178266_LARGE-001.jpg',
            title: 'Катушка Shimano Stradic CI4+ C3000',
            description: 'Легкие катушки серии Stradic CI4+ оснащены ротором Magnumlite Rotor. С его помощью удалось достичь очень плавного вращения, а также высокой чувствительности. Корпус G Free обладает минимальным весом, при этом его прочность на должном уровне.',
            description2: 'Внутри корпуса скрыт шестереночный механизм X-Ship Hagane, обеспечивающий стабильную и бесперебойную работу катушки. Внутренние детали защищены от попадания воды при помощи системы Coreprotect. Фрикционный тормоз с передним расположением рассчитан на нагрузки до 9 кг. Применяться Stradic CI4+ могут как в спиннинговой ловле в пресной воде, так и в морской, так как их корпус и внутренние детали защищены от разрушительного воздействия соли.',
            art: 'STCI4-3C000FB',
            manufacturer: 'Shimano',
            weight: 193,
            class: 'medium, light',
            bearing: '6 S A-RB+1RB',
            price: '19 800',
        },
        visible0: false,
        visible1: false,
        visible2: false,
        showTab1: true,
        showTab2: false,
        showTab3: false,

    },
    filters: {
        formatPrice: function(value) {
            return value + ' ' + String.fromCharCode(8381);
        },
        weightGr: function(value) {
            return value + ' гр.';
        }
    },
    methods: {
        show1: function() {
            if (this.showTab1 != true) {
                this.showTab1 = true;
                this.showTab2 = false;
                this.showTab3 = false;
            }
        },
        show2: function() {
            if (this.showTab2 != true) {
                this.showTab2 = true;
                this.showTab1 = false;
                this.showTab3 = false;
            }
        },
        show3: function() {
            if (this.showTab3 != true) {
                this.showTab3 = true;
                this.showTab2 = false;
                this.showTab1 = false;
            }
        },
    },

});
