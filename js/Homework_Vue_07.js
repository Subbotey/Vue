// В данном файле решено обе задачи

Vue.component('Ten', {
	props: ['shuffleCell', 'getRandom'],
	data() {
		return {
			cells: [],
			count: 1,
		};
	},
	created() {
		for (let i = 1; i < 101; i++) {
			const fontSize = `${this.getRandom(0.7, 1.3)}em`;
			const fontClr = `rgb(${this.getRandom(0, 245)},${this.getRandom(0, 245)},${this.getRandom(0, 245)})`;
			const t = {
				id: i,
				selected: false,
				styleFont: `font-size: ${fontSize}; color: ${fontClr};`,
			};
			this.cells.push(t);
		}
		this.shuffleCell(this.cells);
	},
	methods: {
		mix() {
			this.cells.sort(() => Math.random() * 2 - 1);
		},
		clickCell(id, index) {
			if (id === this.count) {
				this.count += 1;
				this.cells[index].selected = true;
			}
			if (this.count === 101) {
				alert('Ура вы прошли игру!');
			}
		},
	},
	template: `<div>
	<a class="uk-button uk-button-default uk-margin-bottom" href="">Новая игра</a>
	<a class="uk-button uk-button-default uk-margin-bottom" v-on:click.prevent="mix">Перемешать</a>
	<div class="field-ten uk-card uk-card-default">
	<transition-group name="fade" tag="div">
	<div 
	@click="clickCell(cell.id, index)" 
	:style="cell.styleFont" 
	:class="{selected: cell.selected}" 
	class="cell" 
	v-for='(cell, index) in cells' 
	:key='cell.id'>{{cell.id}}</div>
	</transition-group>
	</div>
	</div>`,
});

Vue.component('Five', {
	props: ['shuffleCell', 'getRandom'],
	data() {
		return {
			cells: [],
			count: 1,
		};
	},
	created() {
		for (let i = 1; i < 26; i++) {
			const fontSize = `${this.getRandom(0.7, 1.3)}em`;
			const fontClr = `rgb(${this.getRandom(0, 245)},${this.getRandom(0, 245)},${this.getRandom(0, 245)})`;
			const t = {
				id: i,
				selected: false,
				styleFont: `font-size: ${fontSize}; color: ${fontClr};`,
			};
			this.cells.push(t);
		}
		this.shuffleCell(this.cells);
	},
	methods: {
		mix() {
			this.cells.sort(() => Math.random() * 2 - 1);
		},
		clickCell(id, index) {
			if (id === this.count) {
				this.count += 1;
				this.cells[index].selected = true;
			}
			if (this.count === 26) {
				alert('Ура вы прошли игру!');
			}
		},
	},
	template: `<div>
	<a class="uk-button uk-button-default uk-margin-bottom" href="">Новая игра</a>
	<a class="uk-button uk-button-default uk-margin-bottom" v-on:click.prevent="mix">Перемешать</a>
	<div class="field-five uk-card uk-card-default">
	<transition-group name="fade" tag="div">
	<div 
	@click="clickCell(cell.id, index)" 
	:style="cell.styleFont" 
	:class="{selected: cell.selected}" 
	class="cell" 
	v-for='(cell, index) in cells' 
	:key='cell.id'>{{cell.id}}</div>
	</transition-group>
	</div>
	</div>`,
});

const app = new Vue({
	el: '#app',
	data() {
		return {
			currentView: 'Ten',
		};
	},
	methods: {
		shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		},
		getRandom(min, max) {
			const rand = min + Math.random() * (max + 1 - min);
			return (Math.round((rand) * 100) / 100);
		},
		switchView(view) {
			this.currentView = view;
		},
	},
});
