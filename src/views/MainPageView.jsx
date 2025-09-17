import React from "react";
import millify from "millify";
import Loading from "./Loading";
import LoadMoreController from "../controllers/LoadMoreController";

const MainPageView = ({ coins, isLoading }) => {
  return (
    <div className="container mt-5">
      {/* Üstte genel loading (ilk sayfa yüklenirken) */}
      {!coins?.length && isLoading && <Loading />}

      {coins?.length > 0 && (
        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Sembol</th>
                <th>Resim</th>
                <th>Coin</th>
                <th>Fiyat</th>
                <th>Market Hacmi</th>
                <th>Değişim (24s)</th>
                <th>Hacim (24s)</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, i) => (
                <tr key={coin.id || `${coin.symbol}-${i}`}>
                  <td>{i + 1}</td>
                  <td className="text-uppercase">{coin.symbol}</td>
                  <td>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      width={25}
                      height={25}
                      style={{ objectFit: "contain" }}
                    />
                  </td>
                  <td>{coin.name}</td>
                  <td>{millify(coin.current_price)}</td>
                  <td>{millify(coin.market_cap)}</td>
                  <td
                    style={{
                      color:
                        Number(coin.price_change_percentage_24h) > 0
                          ? "limegreen"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {Number(coin.price_change_percentage_24h).toFixed(2)}%
                  </td>
                  <td>{millify(coin.total_volume)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Alt kısım "Daha fazla" butonu */}
      <LoadMoreController disabled={isLoading} />
    </div>
  );
};

export default MainPageView;
