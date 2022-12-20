const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			continentes:[],
			personajes:[],
			favoritos:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			titulo:"Game Of Thrones"
		},
		actions: {
			addFav:(nombre)=>{
				const store = getStore()
				console.log("Elemento agregado", nombre)
				setStore({favoritos:[...store.favoritos, nombre]})
			},
			deleteFav: id => {
				const store = getStore();
				const newFav = store.favoritos.filter((item, i) => i !== id);
				setStore({ favoritos: newFav });
			},
			getPersonajes: ()=>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://thronesapi.com/api/v2/Characters", requestOptions)
					.then(response => response.json())
					.then(data => setStore({personajes: data}))
				},
			getContinentes:()=>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://thronesapi.com/api/v2/Continents", requestOptions)
					.then(response => response.json())
					.then(data => setStore({continentes: data}))
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			


		}
	};
};

export default getState;