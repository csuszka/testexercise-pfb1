mainContainer = document.getElementById('tree-container');

(function () {
	const delimiter = '|';
	const array = [{
		count: 38,
		name: 'Lakberendezés, világítás, bútor',
	}, {
		count: 37,
		name: 'Lakberendezés, világítás, bútor|Bútor',
	}, {
		count: 25,
		name: 'Lakberendezés, világítás, bútor|Bútor|Nappali bútor',
	}, {
		count: 10,
		name: 'Lakberendezés, világítás, bútor|Bútor|Hálószoba bútor',
	}, {
		count: 2,
		name: 'Lakberendezés, világítás, bútor|Bútor|Ifjúsági bútor',
	}, {
		count: 1,
		name: 'Lakberendezés, világítás, bútor|Világítás',
	}];

	array.forEach(webshopElement => {

		const route = webshopElement.name.split('|');
		const currentElementName = route[route.length - 1];
		const wrapper = document.createElement("ul");

		wrapper.innerHTML = `<li value="${currentElementName}">${currentElementName} (${webshopElement.count})</li>`;

		if (route.length > 1) {
			const parentElementName = route[route.length - 2];
			const parentElement = document.querySelector(`li[value ="${parentElementName}"]`);
			parentElement.append(wrapper);

		} else {
			mainContainer.append(wrapper);
		}
	})
})();