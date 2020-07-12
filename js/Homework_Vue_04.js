// Первая задача

let app = new Vue ({
	el: '#app',
	template: `<div class="uk-align-center uk-padding uk-width-3-4">
					<h1 class="uk-article-meta uk-heading-line"><span>Список услуг</span></h1>
					<ul class="uk-list uk-list-circle uk-list-divider">
						<li v-for="service in services">
							<input class="uk-checkbox" type="checkbox" v-bind:value="service.price" v-model="selectedItems">
							{{service.name}} Цена: {{service.price | formatPrice}}
						</li>
					</ul>
					<div v-if="total" class="uk-margin-small">
						Итого: {{total | formatPrice}}
					</div>
				</div>`,
	data: {
		selectedItems: [],
		services:[{
			name:'Наклейка плёнки',
			price: 350,
		},{
			name:'Замена аккумулятора',
			price: 875,
		},{
			name:'Замена экрана',
			price: 1280,
		},{
			name:'Протирка тряпочкой',
			price: 120,
		}],
	},
	filters: {
		formatPrice: function(value) {
			return value + ' ' + String.fromCharCode(8381);
		},
	},
	computed: {
		total: function() {
			let sum=0;
			for(let i=0; i<this.selectedItems.length; i++){
				sum = sum + parseInt(this.selectedItems[i]);
			}
			return sum;
		},
	}
});

// Вторая задача

let app2 = new Vue ({
	el: '#app2',
	template:`<div class="uk-align-center uk-padding uk-width-3-4">
				<h1 class="uk-article-meta uk-heading-line"><span>Переключение вида</span></h1>
				<div class="uk-padding-small uk-text-right">
					<a uk-icon="icon: thumbnails" @click="show1"></a>
					<a uk-icon="icon: table" @click="show2"></a>
				</div>
				<div v-if="showThumbnails" class="uk-child-width-1-2@m" uk-grid>
					<div v-for="article in articles">
						<div class="uk-card uk-card-default">
							<div class="uk-card-media-top">
								<img :src="article.img" alt="">
							</div>
							<div class="uk-card-body">
								<h3 class="uk-card-title">{{article.name}}</h3>
								<p>{{article.text}}</p>
								<a class="uk-button uk-button-default" :href="article.url">Подробнее</a>
							</div>
						</div>
					</div>
				</div>
				<div v-if="showTable" v-for="article in articles" class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
					<div class="uk-width-auto">
						<img :src="article.imgSm" alt="">
					</div>
					<div class="uk-width-expand">
						<div class="uk-card-body uk-width-expand">
							<h3 class="uk-card-title"><a :href="article.url">{{article.name}}</a></h3>
							<p>{{article.text}}</p>
						</div>
					</div>
				</div>
			</div>`,
	data: {
		articles: [{
			name: 'Сколько звезд в нашей галактике?',
			url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200419004552',
			img: 'img/article1_big.jpg',
			imgSm: 'img/article1.jpg',
			text: 'Млечный Путь - это галактика, в которой находится Земля. Часть его видна в ясную ночь с Земли, как толстая полоса звезд, простирающаяся по небу. Мы можем увидеть тысячи этих звезд невооруженным глазом, а многие другие в телескоп. Но сколько звезд в Млечном Пути?',
		}, {
			name: 'Что такое Лунное затмение?',
			url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200415135436',
			img: 'img/article2_big.jpg',
			imgSm: 'img/article2.jpg',
			text: 'Луна движется по орбите вокруг Земли, и в то же время Земля вращается вокруг Солнца. Иногда Земля движется между Солнцем и Луной. Когда это происходит, Земля блокирует солнечный свет, который обычно отражается Луной (именно этот солнечный свет заставляет светить Луну).',
		}, {
			name: 'Может ли черная дыра уничтожить Землю?',
			url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200415133714',
			img: 'img/article3_big.jpg',
			imgSm: 'img/article3.jpg',
			text: 'Черные дыры не блуждают по вселенной, беспорядочно поглощая миры. Они следуют законам гравитации точно так же, как и другие объекты в космосе. Орбита черной дыры должна быть очень близка к Солнечной системе, чтобы повлиять на Землю, что маловероятно.',
		}, {
			name: 'Что такое затмение?',
			url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200415135230',
			img: 'img/article4_big.jpg',
			imgSm: 'img/article4.jpg',
			text: 'Солнечное затмение возникает тогда, когда Луна проходит между Солнцем и Землей. Когда это происходит, Луна блокирует свет солнца и он не достигает Земли. Это вызывает затмение Солнца, или солнечное затмение. Во время солнечного затмения Луна отбрасывает свою тень на Землю.',
		}],
		showThumbnails: true,
		showTable: false,
	},
	methods: {
		show1: function() {
			if (this.showThumbnails != true) {
				this.showThumbnails = true;
				this.showTable = false;
			}
		},
		show2: function() {
			if (this.showTable != true) {
				this.showTable = true;
				this.showThumbnails = false;
			}
		},
	},

});
