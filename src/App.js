import { useState, useEffect } from "react";
import Feed from "./components/Feed";
import {
  data,
  BrandFilter,
  categoryFilter,
  priceFilter,
  priceCategory,
} from "./Utitlity";
function App() {
  const [Data, setData] = useState(data);
  const [category, setcategory] = useState(categoryFilter);
  const [Brand, setBrand] = useState(BrandFilter);
  const [PriceFilter, setPriceFilter] = useState(priceFilter);
  const [PriceCategory, setPriceCategory] = useState(priceCategory);

  const [inputValue, setinputValue] = useState("");
  const handleBrandChange = (checked, id) => {
    if (checked) {
      const updatedFilter = Brand.map((item) => {
        if (item.id === id) {
          item = { ...item, checked: true };
          return item;
        }
        item.checked = false;
        return item;
      });
      setBrand(updatedFilter);
    } else {
      const updatedFilter = Brand.map((item) => {
        if (item.id === id) {
          item = { ...item, checked: false };
          return item;
        }
        item.checked = false;
        return item;
      });
      setBrand(updatedFilter);
    }
  };
  const handleCategoryChange = (checked, id) => {
    if (checked) {
      const updatedFilter = category.map((item) => {
        if (item.id === id) {
          item = { ...item, checked: true };
          return item;
        }
        item.checked = false;
        return item;
      });
      setcategory(updatedFilter);
    } else {
      const updatedFilter = category.map((item) => {
        if (item.id === id) {
          item = { ...item, checked: false };
          return item;
        }
        item.checked = false;
        return item;
      });
      setcategory(updatedFilter);
    }
  };
  const handlePriceChange = (checked, id) => {
    if (checked) {
      const updatedFilter = PriceFilter.map((item) => {
        if (item.id === id) {
          item = { ...item, checked: true };
          return item;
        }
        item.checked = false;
        return item;
      });
      setPriceFilter(updatedFilter);
    } else {
      const updatedFilter = PriceFilter.map((item) => {
        if (item.id === id) {
          item = { ...item, checked: false };
          return item;
        }
        item.checked = false;
        return item;
      });
      setPriceFilter(updatedFilter);
    }
  };
  const handlePriceCategoryChange = (id, selected) => {
    const category = priceCategory;
    const Updated = category.map((item) => {
      if (item.id === id) {
        item = { ...item, selected: true };
        return item;
      }
      item = { ...item, selected: false };
      return item;
    });
    setPriceCategory(Updated);
  };

  const updateList = () => {
    let newData = data.map((item) => {
      item.brand = item.brand.toLowerCase();
      item.category = item.category.toLowerCase();
      item.name = item.name.toLowerCase();
      return item;
    });
    const checkedBrand = Brand.filter((item) => {
      return item.checked === true;
    }).map((item) => {
      item.name = item.name.toLowerCase();
      return item;
    });
    if (checkedBrand.length) {
      newData = newData.filter((item) => {
        return item.brand === checkedBrand[0].name;
      });
    }
    const checkedCategory = category
      .filter((item) => {
        return item.checked === true;
      })
      .map((item) => {
        item.name = item.name.toLowerCase();
        return item;
      });
    if (checkedCategory.length) {
      newData = newData.filter((item) => {
        return item.category === checkedCategory[0].name;
      });
    }
    const checkedPrice = PriceFilter.filter((item) => {
      return item.checked === true;
    });
    if (checkedPrice.length) {
      if (checkedPrice[0].name === "<$100") {
        newData = newData.filter((item) => {
          return item.price < 100;
        });
      }
      if (checkedPrice[0].name === "$100 - $199") {
        newData = newData.filter((item) => {
          if (item.price >= 100 && item.price <= 199) {
            return item;
          }
        });
      } else if (checkedPrice[0].name === "$200 - $599") {
        newData = newData.filter((item) => {
          if (item.price >= 200 && item.price <= 599) {
            return item;
          }
        });
      } else if (checkedPrice[0].name === "$600 - $999") {
        newData = newData.filter((item) => {
          return item.price >= 600 && item.price <= 999;
        });
      } else if (checkedPrice[0].name === ">$1000") {
        newData = newData.filter((item) => {
          return item.price > 1000;
        });
      }
    }
    if (inputValue.length > 0) {
      newData = newData.filter((item) => {
        return item.name.includes(inputValue.toLowerCase());
      });
    }
    const selectedPriceCategory = PriceCategory.filter((item) => {
      if (item.selected === true) {
        return item;
      }
    });

    if (selectedPriceCategory.length) {
      if (selectedPriceCategory[0].name === "price high to low") {
        newData = newData.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (selectedPriceCategory[0].name === "price low to high") {
        newData = newData.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
    setData(newData);
  };
  useEffect(() => {
    updateList();
  }, [Brand, category, PriceFilter, inputValue, PriceCategory]);
  return (
    <div className="App">
      <Feed
        data={Data}
        category={category}
        Brand={Brand}
        Price={PriceFilter}
        priceCategory={PriceCategory}
        handleBrand={handleBrandChange}
        handleCategory={handleCategoryChange}
        handlePrice={handlePriceChange}
        inputValue={inputValue}
        setinputValue={setinputValue}
        handlePriceCategory={handlePriceCategoryChange}
      />
    </div>
  );
}

export default App;
