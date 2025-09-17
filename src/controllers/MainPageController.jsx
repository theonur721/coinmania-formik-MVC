import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import MainPageView from "../views/MainPageView";

// CoinGecko markets endpoint
axios.defaults.baseURL = "https://api.coingecko.com/api/v3/coins/markets";

const PER_PAGE = 10;

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const page = params.get("page");

    // İlk açılışta page yoksa 1 yapıp çık
    if (!page) {
      setParams({ page: "1" });
      return;
    }

    // page parametresi değiştiğinde o sayfanın verisini çek
    const fetchCoins = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `?vs_currency=usd&order=market_cap_desc&per_page=${PER_PAGE}&page=${page}`
        );
        // Yeni sayfa verisini mevcut listeye ekle
        setCoins((prev) => [...prev, ...data]);
      } catch (err) {
        console.error("Coins fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, [params, setParams]);

  return (
    <MainPageView coins={coins} isLoading={isLoading} perPage={PER_PAGE} />
  );
};

export default MainPageController;
