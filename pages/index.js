
import { useState } from "react";
import Intro from "../components/intro";
import Message from "../components/message";
import LaureateList from "../components/laureate-list";
import { useLaureatesData } from "../hooks/data";
import { extractData, filterCategoryData, filterGenderData, sortData } from "./utils";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  const { data, isLoading, isError } = useLaureatesData();
  const [sortKey, setSortKey] = useState("---");
  const [categoryFilterKey, setCategoryFilterKey] = useState("---");
  const [genderFilterKey, setGenderFilterKey] = useState("---");

  // the sort/filter factory. If new operations are added to
  // the program - you shall add their "declaretion" here :)
  function getDataQueryKeys(event) {
    const operation = event.target.id;
    const byKey = event.target.value;
    if (operation === "data-sort") {
      setSortKey(byKey);
    }
    else if (operation === "category-filter") {
      setCategoryFilterKey(byKey);
    }
    else if (operation === "gender-filter") {
      setGenderFilterKey(byKey);
    }
  }

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  let laureates = extractData(data);
  laureates = filterGenderData(filterCategoryData(sortData(laureates, sortKey), categoryFilterKey), genderFilterKey);

  return (
    <>
    <Intro changeHandler={getDataQueryKeys}/>
    <LaureateList laureates={laureates} />
    </>
  )
}
