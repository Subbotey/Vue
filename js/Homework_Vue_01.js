let webStore = new Vue({
    el: '#app',
    data: {
        sitename: 'Первая домашка по Vue',
        product: {
            link: 'https://www.shimano.com/en/',
            url: 'https://images.spinningline.ru/00171485_LARGE-001.jpg',
            title: 'Катушка Shimano Ultegra 17 2500FB',
            description: 'Медиум-лайтовая модификация безынерционки Ultegra 17 с индексом 2500FB весит 240 гр. Передняя часть корпуса G Free Body (со смещенным центром тяжести) оснащена фрикционным тормозом, который рассчитан на нагрузку до 9 кг. Отношение передаточного числа равняется 5,0:1. Такую модель можно применить на рыбалке не только в пресноводном водоеме, но и в соленой воде, так как внутренний механизм защищен системой Core Protect.',
            art: 'ULT2500FB',
            manufacturer: 'Shimano',
            weight: 240,
            class: 'medium, light',
            bearing: '1 SA-RB+4BB+1RB',
            price: '11 700',
        }
    },
    filters: {
        formatPrice: function(value) {
            return value + ' ' + String.fromCharCode(8381);
        },
        weightGr: function(value) {
            return value + ' гр.';
        }
    }
});

let user = new Vue({
	el: '#user',
	data: {
		name: 'Сергей',
		lastname: 'Семёнов',
		age: '31 год',
		login: 'SergiO415',
		email: 'SergiO415@mail.ru',
		img: 'img/8biticon.jpg',
	},
});
