
function beans() {
  let beanArray = [];
  for (let i = 0; i < counters.length; i++){
      if (!beanArray.includes(counters[i].bean)) {
          beanArray.push(counters[i].bean);
      }
  }
  return beanArray;
}

function sortByName(array) {
  return array.slice().sort((a,b) => {
      const nameA = a.name.toUpperCase(); 
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;  
  });
}

function filterByBean(array, targetBean) {
  let filteredBeenArray = [];
  for (let i = 0; i < array.length; i++) {
    let beansOfArray = array[i].bean.toUpperCase();
    if (beansOfArray.includes(targetBean.toUpperCase())) {
      filteredBeenArray.push(array[i]);
    }
}
return filteredBeenArray;
}


function totalNumberOfBeans(array) {
  beansTotal = 0;
  for(let i = 0; i < array.length; i++){
    beansTotal += array[i].count;
  }
  return beansTotal;
}

beanTypes = beans();
for(let i = 0; i < beanTypes.length; i++){
  let filteredBeanType = filterByBean(counters, beanTypes[i]);
  beanName = sortByName(filteredBeanType);
  totalBeans = totalNumberOfBeans(filteredBeanType);

  const countersInsert = document.createElement('div');
  countersInsert.className = 'beans';
  countersInsert.innerHTML = `<h2>${beanTypes[i]} (${totalBeans})</h2>`;
  const counterList = document.createElement('ol');

  for(let j = 0; j < beanName.length; j++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${beanName[j].name} (${beanName[j].count})`;
    counterList.appendChild(listItem);
  }
  countersInsert.appendChild(counterList);
  document.querySelector(".beanContainer").appendChild(countersInsert);
}
