'use strict';

let data = [{id: 1, name: 'Wuriyanto', address: 'Banjarnegara, Jawa Tengah', job: 'Software enginner', detail: ''},
			{id: 2, name: 'Demian', address: 'Solo, Jawa Tengah', job: 'IT Infra', detail: ''},
			{id: 3, name: 'Rani', address: 'Jakarta, DKI Jakarta', job: 'QA', detail: ''}];
			
let formatToDetail = (name, address, job) => {
	let detail = `Name: ${name}, Job: ${job}, Address: ${address}`;
	return detail.toUpperCase();
};

let dataService = {
	currentPerson: '',
	
	findById: function(id){
		let dataLength = data.length;
		for(let i = 0; i < dataLength; i++){
			if(data[i].id === id){
				this.currentPerson = data[i];
				break;
			}
		}
		return this;
	},
	
	formatData: function(){
		let name = this.currentPerson.name;
		let job = this.currentPerson.job;
		let address = this.currentPerson.address;
		let detail = formatToDetail(name, address, job);
		this.currentPerson.detail = detail;
		return this;
	},
	
	getData: function(){
		if(!this.currentPerson){
			console.log('Data tidak di temukan');
		}
		console.log(this.currentPerson.detail);
	}
};

dataService.findById(2).formatData().getData();

