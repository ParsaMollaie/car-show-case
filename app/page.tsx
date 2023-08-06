"use client"
import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { useEffect } from "react";

export default async function Home() {

  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  useEffect(() =>{() => test()} ,[])

  const test = async() => {
    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "c5bbb8c8cdmshc25b950ba12ac1ep1a2622jsna9264c3f1e7e");
    myHeaders.append("X-RapidAPI-Host", "cars-by-api-ninjas.p.rapidapi.com");
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions :any = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
    
  }


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />

          </div>

        </div>

        {!isDataEmpty ? (
          <section>we have cars</section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black font-bold text-xl">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
