// Первая задача
// Простой поиск без обнуления предыдущих результатов

let app = new Vue({
    el: '#app',
    template: `<div class="uk-align-center uk-padding uk-width-3-4">
                <h1 class="uk-article-meta uk-heading-line"><span>Поиск по массиву</span></h1>
                <p class="uk-article-meta">Подсказки: звезд, затмение, черная, такое.</p>

                <a href="#" class="uk-margin-small-right" uk-icon="search" v-on:click='search'></a>
                <form class="uk-search uk-search-default">
                    <input v-model="request" class="uk-search-input" type="search" placeholder="Поиск...">
                </form>
                <div v-if="request" class="uk-margin-small">Вы искали: {{request}}</div>
                <div v-for="result in issue">
                    <div class="uk-width-1-3 uk-card uk-card-default uk-card-body uk-margin-small uk-animation-scale-down">
                        <h3 class="uk-card-title"><a :href="result.url">{{result.name}}</a></h3>
                        <img class="uk-align-center" :src="result.img" alt="">
                    </div>
                </div>
            </div>
`,
    data: {
        request:'',
        issue:[],
        articles: [{
            name: 'Сколько звезд в нашей галактике?',
            url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200419004552',
            img: 'img/article1.jpg',
        },{
            name: 'Что такое Лунное затмение?',
            url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200415135436',
            img: 'img/article2.jpg',
        },{
            name: 'Может ли черная дыра уничтожить Землю?',
            url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200415133714',
            img: 'img/article3.jpg',
        },{
            name: 'Что такое затмение?',
            url: 'https://www.astronews.ru/cgi-bin/mng.cgi?page=articles&id=20200415135230',
            img: 'img/article4.jpg',
        }],
    },
    methods: {
        search: function () {
            let str = this.request;
            let re = new RegExp(str, 'ig');

            for (let i = 0; i < this.articles.length; i++) {
                let str2 = this.articles[i].name;
                let t = str2.search(re);
                console.log(t);

                if (t == 0) {
                    alert('Введите запрос');
                    break;
                } else if (t == -1) {
                    continue;
                } else {
                    this.issue.push(this.articles[i]);
                }
            }

            if (this.issue.length == 0) {
                alert('По вашему запросу ни чего не найдено.');
                location.reload()
            }
        }
    },
});

// Вторая задача

let app2 = new Vue ({
    el: '#app2',
    template: `<div class="uk-align-center uk-padding uk-width-3-4">
                <h1 class="uk-article-meta uk-heading-line"><span>Редактируемый текст</span></h1>
                <p class="uk-article-meta uk-link-reset" href="#modal-sections" uk-toggle>{{text}}</p>
                <div id="modal-sections" uk-modal>
                    <div class="uk-modal-dialog">
                        <button class="uk-modal-close-default" type="button" uk-close></button>
                        <div class="uk-modal-header">
                            <h2 class="uk-modal-title">Измените текст</h2>
                        </div>
                        <div class="uk-modal-body">
                            <input type="text" v-model="text">
                        </div>
                        <div class="uk-modal-footer uk-text-right">
                            <button class="uk-button uk-button-default uk-modal-close" type="button">
                                Готово
                            </button>
                        </div>
                    </div>
                </div>
            </div>
`,
    data: {
        text: 'Изменяемый текст'
    }

});
