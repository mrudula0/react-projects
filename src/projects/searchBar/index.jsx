import React, { useState } from "react";

export default function SearchBox() {
  const data = [
    "naresh",
    "suresh",
    "ramesh",
    "aneesh",
    "maya",
    "ritu",
    "srihita",
    "mrudula",
    "alice",
    "jeevan",
  ];
  const [filterD, setFilterD] = useState(data);
  console.log(filterD, "17==");
  const [search, setSearch] = useState("");
  const handleInp = (e) => {
    setSearch(e.target.value);

    console.log(search, "21");
  };

  const handleList = (item) => {
    setSearch(item);
  };
  const searchedData = filterD.filter((item) =>
    item.toLowerCase().includes(search)
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search here..."
        onChange={handleInp}
      />
      <div>
        <ul>
          {searchedData.map((item,i) => {
            return <List names={item} handleList={handleList} key={i}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

const List = ({ names, handleList }) => {
  return (
    <>
      <li onClick={() => handleList(names)}>{names}</li>
    </>
  );
};
