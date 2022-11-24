export function checkCountry(item) {
  let country = null;
     try {
      country = item.birth.place.country.en;
      if (country === "British Protectorate of Palestine" | country === "British Mandate of Palestine") {
        country = "Israel";
      }
     } catch(error) {
      country = "unknown";
     }
     return country
}

export function extractData(rawData) {
  const semplifiedData = [];
  for (const item of rawData.laureates) {
    semplifiedData.push({
      id : item.id,
  fullName : item.fullName.en,
  gender : item.gender,
  birthCountry : checkCountry(item),
  category : item.nobelPrizes[0].category.en,
  year : item.nobelPrizes[0].awardYear,
  worth : item.nobelPrizes[0].prizeAmountAdjusted,
  reason : item.nobelPrizes[0].motivation.en
    })
  }
    
  return semplifiedData;
}

export function sortData(laureates, key) {
  const sorted = laureates.sort((a, b) => {
    if (key === "name") {
        return a.fullName > b.fullName ? 1 : -1 ;
      } 
      else if(key === "country") {
        return a.birthCountry > b.birthCountry ? 1 : -1;
      }
      else if (key === "year") {
        return parseInt(a.year) > parseInt(b.year) ? 1 : -1 ;
      }
      return 0;
    })
    return sorted;
}

export function filterGenderData(laureates, key) {
  console.log("GENDER ***start filtering by: " + key);
    const filtered = laureates.filter((laureate) => {
      if (key === "---") {
          console.log("Default sort activated: ");
          return laureate;
        }
        else {
          return key === laureate.gender;
        }
    });
    return filtered;
}

export function filterCategoryData(laureates, key) {
  console.log("CATEGORY ***start filtering by: " + key);
    const filtered = laureates.filter((laureate) => {
        if (key === "---") {
            return laureate;
          }
          else {
            return key === laureate.category;
          }
    });
    return filtered;
}