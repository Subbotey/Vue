// Первая задача

Vue.component('twin', {
    template: `<div class="uk-animation-scale-up uk-padding-remove-left uk-text-center uk-child-width-expand@m uk-grid-match" uk-grid>
            <div class="uk-width-1-3@m">
                <div class="uk-card uk-card-default uk-card-body ">
                    <h3 class="uk-heading-divider uk-card-title">Катушка Shimano Twin Power C2000S</h3>
                    <p><img src="https://images.spinningline.ru/00178621_LARGE-001.jpg"></p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body uk-text-left">
                    <h3 class="uk-card-title uk-heading-divider">Характеристики</h3>
                    <div><span class="uk-text-bold">Описание:</span> Twin Power – это очень обширная линейка безынерционок бренда Shimano, в которую входят модификации с разными техническими характеристиками. Здесь представлена модель, предназначенная для оснащения ультралайтового удилища.</div>
                    <p><span class="uk-text-bold">Артикул:</span> TPC2000S</p>
                    <p><span class="uk-text-bold">Производитель:</span> <a href="https://www.shimano.com/en/">Shimano</a></p>
                    <p><span class="uk-text-bold">Вес:</span> 193 гр.</p>
                    <p><span class="uk-text-bold">Класс катушки:</span> ultralight</p>
                    <p><span class="uk-text-bold">Количество подшипников:</span> 9+1</p>
                    <p><span class="uk-text-bold">Цена:</span> 32 060 руб.</p>
                </div>
            </div>
        </div>`,
})

Vue.component('soare', {
    template: `<div class="uk-animation-scale-up uk-padding-remove-left uk-text-center uk-child-width-expand@m uk-grid-match" uk-grid>
            <div class="uk-width-1-3@m">
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-heading-divider uk-card-title">Катушка Shimano Soare CI4+ C2000SSPG</h3>
                    <p><img src="https://images.spinningline.ru/00180838_LARGE-001.jpg"></p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body uk-text-left ">
                    <h3 class="uk-card-title uk-heading-divider">Характеристики</h3>
                    <div><span class="uk-text-bold">Описание:</span> Разработчики японского концерна Shimano в 2017 году обновили серию безынерционных катушек Soare CI4+. Эти катушки давно в ходу у любителей ультралайта и микроджига. Особой популярностью безынерционки пользуются у поклонников ловли форели на водоемах-платниках.</div>
                    <p><span class="uk-text-bold">Артикул:</span> CI4+C20SSPG</p>
                    <p><span class="uk-text-bold">Производитель:</span> <a href="https://www.shimano.com/en/">Shimano</a></p>
                    <p><span class="uk-text-bold">Вес:</span> 162 гр.</p>
                    <p><span class="uk-text-bold">Класс катушки:</span> ultralight</p>
                    <p><span class="uk-text-bold">Количество подшипников:</span> 9+1</p>
                    <p><span class="uk-text-bold">Цена:</span> 25 900 руб.</p>
                </div>
            </div>
        </div>`
})

Vue.component('stradic', {
    template: `<div class="uk-animation-scale-up uk-padding-remove-left uk-text-center uk-child-width-expand@m uk-grid-match" uk-grid>
            <div class="uk-width-1-3@m">
                <div class="uk-card uk-card-default uk-card-body ">
                    <h3 class="uk-heading-divider uk-card-title">Катушка Shimano Stradic CI4+ C3000</h3>
                    <p><img src="https://images.spinningline.ru/00178266_LARGE-001.jpg"></p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body uk-text-left ">
                    <h3 class="uk-card-title uk-heading-divider">Характеристики</h3>
                    <div><span class="uk-text-bold">Описание:</span> Легкие катушки серии Stradic CI4+ оснащены ротором Magnumlite Rotor. С его помощью удалось достичь очень плавного вращения, а также высокой чувствительности. Корпус G Free обладает минимальным весом, при этом его прочность на должном уровне.</div>
                    <p><span class="uk-text-bold">Артикул:</span> STCI4-3C000FB</p>
                    <p><span class="uk-text-bold">Производитель:</span> <a href="https://www.shimano.com/en/">Shimano</a></p>
                    <p><span class="uk-text-bold">Вес:</span> 193 гр.</p>
                    <p><span class="uk-text-bold">Класс катушки:</span> medium, light</p>
                    <p><span class="uk-text-bold">Количество подшипников:</span> 6 S A-RB+1RB</p>
                    <p><span class="uk-text-bold">Цена:</span> 19 800 руб.</p>
                </div>
            </div>
        </div>`
})

new Vue({
    el: '#app',
    data: {
        currentView: 'twin',
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    },
});

// Вторая задача

Vue.component('joke', {
    props: ['joke'],
    data: function() {
        return {
            countJoke: 0,
        }
    },
    template: `<div class="uk-card uk-card-default uk-card-body uk-animation-fade" :key="countJoke">{{joke[countJoke]}}</div>`,
    methods: {
        currJoke() {
            if (this.countJoke == this.joke.length - 1) {
                this.countJoke = 0;
            } else {
                this.countJoke++;
            }
            return this.countJoke;
        }
    },
	created() {
        setInterval(this.currJoke, 8000);

	}
})


new Vue({
    el: '#app1',
    data: {
        jokes: [
            `- Мы пришли на участок и обнаружили, что за нас кто-то проголосовал! - А вы представьте, каково членам комиссии - они пришли на участок работать, а за них уже кто-то голоса подсчитал!`,
            `Мистер Проппер сначала изобрёл шампунь, но после того, как у него от этого шампуня вылезли все волосы, он понял, что лучше этой хренью мыть пол.`,
            `Раньше гуманитарием был тот, кто стихи писал, языки знал... Сейчас - тот, кто таблицу умножения забыл.`,
            `Только мой папа догадался купить новую мобилу, примотать ее скотчем к пульту от телевизора и звонить на него, когда тот теряется!`,
            `Портреты Ираклия Пирцхалавы, Ингеборги Дапкунайте и Джавахарлала Неру висят в каждой уважающей себя логопедической клинике.`,
        ],
    },
})

// Третья задача
// добавление без проверки полей на корректный ввод.

window.gallery = [
	{
		url: 'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg',
		name: 'Счастливый пёс',
		index: 1
	},
	{
		url: 'https://fortnitefun.ru/wp-content/uploads/2019/10/8-Ball-vs-Scratch-300x300.jpg',
		name: 'Восьмой',
		index: 2
	},
	{
		url: 'https://www.tripzaza.com/ru/destinations/files/2017/08/Ansi-1-e1502373327731-300x300.jpg',
		name: 'Канал',
		index: 3
	},
	{
		url: 'https://startapy.ru/wp-content/uploads/2016/09/brainstorm-300x300.png',
		name: 'Идея!',
		index: 4
	},
	{
		url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/7/2019/11/photo-of-peeled-banana-on-yellow-plate-and-background-2872767-300x300.jpg',
		name: 'Банан ммм...',
		index: 5
	},
	{
		url: 'https://tortnazakaz-ufa.ru/wp-content/uploads/2012/02/tort-fistashkovi-nachinka-300x3001-300x300.jpg',
		name: 'К чаю',
		index: 6
	},
]
// Одна картинка
Vue.component('gallery-img', {
	props: {
		gal: {
			type: Object,
			required: true,
		}
	},
	template:`<div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle uk-light uk-width-auto">
                    <img :src="gal.url" alt="">
                    <div class="uk-position-center">
                        <div class="uk-transition-slide-top-small">
                            <h4 class="uk-margin-remove">{{gal.name}}</h4>
                        </div>
                    </div>
                    <a
						@click="$emit('remove-img', gal.index)"
						class="uk-transition-slide-right uk-position-top-right uk-button-secondary"
						uk-icon="trash"
					>
					</a>
                </div>
            </div>`,
})
// Поля для добавления картинки
Vue.component('add-img', {
	template:`<form class="uk-form-horizontal uk-form-stacked uk-grid-small" uk-grid>
	                <legend class="uk-legend">Добавление изображения в галерею</legend>
	                <div class="uk-width-1-2@s">
	                    <div class="uk-margin">
	                        <label class="uk-form-label" for="form-stacked-text">Вставьте ссылку</label>
	                        <div class="uk-form-controls">
	                            <input
									class="uk-input uk-form-width-medium"
									type="text"
									placeholder="Ссылка"
									v-model="url"
								>
	                        </div>
	                    </div>
	                </div>
	                <div class="uk-width-1-2@s">
	                    <div class="uk-margin">
	                        <label class="uk-form-label" for="form-stacked-text">Напишите название</label>
	                        <div class="uk-form-controls">
	                            <input
									class="uk-input uk-form-width-medium"
									type="text"
									placeholder="Название изображения"
									v-model="name"
								>
	                        </div>
	                    </div>
	                </div>
	                <div class="uk-margin">
	                    <button
							class="uk-button uk-button-text"
							@click.prevent="addImg"
							type='submit'
						>
							Добавить
						</button>
	                </div>
	            </form>`,
	data(){
		return {
			name:'',
			url:'',
		}
	},
	methods:{
		addImg(){
			if (this.name.trim()) {
				const newImg = {
					index: Date.now(),
					name: this.name,
					url: this.url,
				}
				this.$emit('add-img', newImg)
				this.name = ''
				this.url = ''
			}
		}
	}
});
// Сама галерея
Vue.component('gallery', {
	props:['gallery'],
	template: `<div class="uk-child-width-1-4@m uk-child-width-1-2@s uk-grid-small uk-grid-match" uk-grid>
		<gallery-img
			v-for="gal in gallery"
			:gal="gal"
            :key="gal.id"
			@remove-img="removeImg"
		>
		</gallery-img>
	</div>`,
	methods: {
		removeImg(index) {
			this.$emit('remove-img', index)
		}
	}
});

let app1 = new Vue({
	el: '#app2',
	data:{
		gallery: []
	},
	methods: {
		removeImg(index) {
			this.gallery = this.gallery.filter(t => t.index !== index)
		},
		addImg(img) {
			this.gallery.push(img)
		}
	},
	created(){
		this.gallery = window.gallery;
	}
});
