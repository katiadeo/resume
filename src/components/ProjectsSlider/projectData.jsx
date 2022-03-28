import Pokemongo from '../../assets/photos/pokemongo.jpg';
import Calculator from '../../assets/photos/calculator.jpg';
import Piano from '../../assets/photos/piano.jpg';
import Clock from '../../assets/photos/clock.jpg';
import Drumkit from '../../assets/photos/drumkit.jpg';
import Player from '../../assets/photos/player.jpg';
import Datatable from '../../assets/photos/datatable.jpg';
import Creditcard from '../../assets/photos/creditcard.jpg';

export const projectsData = [
	{
		id: 0,
		headline: 'Credit Cards with React, MongoDB and Express',
		tools: ['#react', '#mongodb', '#express', '#ant design'],
		src: Creditcard,
		link: 'https://github.com/katiadeo/credit-cards',
	},
	{
		id: 1,
		headline: 'PokemonGo with React',
		tools: ['#react', '#json-server'],
		src: Pokemongo,
		link: 'https://github.com/katiadeo/final-project',
	},
	{
		id: 2,
		headline: 'Calculator with useReducer',
		tools: ['#react'],
		src: Calculator,
		link: 'https://katiadeo.github.io/calculator/',
	},
	{
		id: 3,
		headline: 'Small DataTable with Vue',
		tools: ['#vue3', '#naive-ui', '#localStorage'],
		src: Datatable,
		link: 'https://katiadeo.github.io/vue-test/',
	},
	{
		id: 4,
		headline: 'Piano with JS',
		tools: ['#vanilla js'],
		src: Piano,
		link: 'https://rolling-scopes-school.github.io/katiadeo-JSFE2021Q1/virtual-piano/',
	},
	{
		id: 5,
		headline: 'Clock with Neumorphism CSS',
		tools: ['#vanilla js'],
		src: Clock,
		link: 'https://rolling-scopes-school.github.io/katiadeo-JSFEPRESCHOOL/js-clock/',
	},
	{
		id: 6,
		headline: 'DrumKit with JS',
		tools: ['#vanilla js'],
		src: Drumkit,
		link: 'https://rolling-scopes-school.github.io/katiadeo-JSFEPRESCHOOL/drum-kit/index.html',
	},
	{
		id: 7,
		headline: 'Custom Video Player with JS',
		tools: ['#vanilla js'],
		src: Player,
		link: 'https://rolling-scopes-school.github.io/katiadeo-JSFEPRESCHOOL/custom-video-player/',
	},
];
