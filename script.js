var shoppingList = [];

function adicionarItem()
{
	const item = document.getElementById("item");
	if (!item.value)
	{
		alert("Produto Invalido");
		item.value = "";
		return;
	}

	if (shoppingList.find(x => x === item.value))
	{
		alert("Item já existente");
		item.value = "";
		return;
	}

	shoppingList.push(item.value);
	item.value = "";
	adicionarElemento();
} 

function adicionarElemento()
{
	limparListaNoHTML();
	for (let item = 0; item < shoppingList.length; item++)
	{
		const element = shoppingList[item];
		
		const div = document.createElement("div");
		div.style.color="rgb(226, 222, 222)"
		div.style.border="1px";
		div.style.borderStyle="solid"
		div.style.borderRadius="10px";
		div.style.height="40px";
		div.style.marginTop="1px"
		div.style.overflowY="auto";
		div.style.marginLeft="10px";
		div.style.marginRight="10px";

		const label = document.createElement("label");
		label.style.marginLeft="10px";
		label.style.marginTop="6px";
		label.style.color="black"

		const button = document.createElement("button");
		button.style.marginLeft="10px";
		button.style.marginTop="6px";
		button.style.width = "55px"
		button.style.height = "25px"
		button.textContent = "Excluir"

		label.setAttribute('id', element);
		div.setAttribute("id", element);
		button.setAttribute("id", element);

		label.appendChild(document.createTextNode(element));
		div.appendChild(label);
		div.appendChild(button);
		const parentContainer = document.getElementById("containerItems");
		parentContainer.appendChild(div);

		document.getElementById(element).onclick = function()
		{
			const currentButton = this.childNodes[1];
			const currentValue = currentButton.parentElement.id;
			const item = document.getElementById(currentValue);
			
			const parentContainer = document.getElementById("containerItems");
			parentContainer.removeChild(item);
			shoppingList = shoppingList.filter(x => x !== currentValue);
		};
	}
}

function limparListaNoHTML()
{
	const parent = document.getElementById("containerItems");
	while (parent.firstChild)
	{
		parent.firstChild.remove()
	}
}